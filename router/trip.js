const express = require("express");
const { Router } = express;
const router = new Router();
const Trip = require("../models").trip;
const Post = require("../models").post;
const Picture = require("../models").picture;
const authMiddleware = require("../auth/middleware");

// GET all trips
router.get("/", async (req, res, next) => {
  try {
    const allTrips = await Trip.findAll({
      include: { model: Post, include: { model: Picture } },
    });
    if (!allTrips) {
      res.status(404).send("User not found");
    } else {
      const tripsWithPosts = allTrips.filter((trip) => {
        return trip.posts.length > 0;
      });
      res.json(tripsWithPosts);
    }
  } catch (e) {
    next(e);
  }
});

// GET one trip
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const getSingleTrip = await Trip.findByPk(id, {
      include: { model: Post, include: { model: Picture } },
    });

    if (!getSingleTrip) {
      res.status(404).send("Trip not found");
    } else {
      res.json(getSingleTrip);
    }
  } catch (e) {
    next(e);
  }
});

router.post("/newtrip", authMiddleware, async (req, res) => {
  const { tripTitle, startDate, endDate, userId } = req.body.data;
  if (!tripTitle || !startDate || !userId) {
    return res.status(400).send("Please fill in all the required fields");
  }

  try {
    const createNewTrip = await Trip.create({
      tripTitle,
      startDate,
      endDate,
      userId,
    });
    const newTrip = await Trip.findByPk(createNewTrip.id, {
      include: { model: Post, include: { model: Picture } },
    });
    res.send(newTrip);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.patch("/endtrip/:id", authMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    const tripToUpdate = await Trip.findByPk(id, {
      include: { model: Post, include: { model: Picture } },
    });

    const updatedtrip = await tripToUpdate.update({ ...req.body.data });
    res.send(updatedtrip);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/newpost", authMiddleware, async (req, res) => {
  console.log("my req.body.data", req.body.data);
  const {
    title,
    content,
    tripId,
    latitude,
    longitude,
    pictures,
  } = req.body.data;
  if (!title || !content || !tripId) {
    return res.status(400).send("Please fill in all the required fields");
  }

  try {
    const newPostBody = await Post.create({
      title,
      content,
      tripId,
      latitude,
      longitude,
    });

    if (pictures.length > 0) {
      const postPictures = pictures.map((picture) => {
        return {
          imageUrl: picture,
          postId: newPostBody.id,
        };
      });
      const createPictures = await Picture.bulkCreate(postPictures);
    }
    const newPost = await Post.findByPk(newPostBody.id, { include: Picture });

    console.log("my res", newPost);
    res.send(newPost);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
