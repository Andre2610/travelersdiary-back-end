const express = require("express");
const { Router } = express;
const router = new Router();
const User = require("../models").user;
const Trip = require("../models").trip;
const Post = require("../models").post;
const Picture = require("../models").picture;
const Like = require("../models").like;
const Comment = require("../models").comment;
const authMiddleware = require("../auth/middleware");
const bcrypt = require("bcrypt");

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
        console.log("trip data", trip);
        return trip.posts.length > 0;
      });
      console.log("do i run", tripsWithPosts);
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
    const newTrip = await Trip.create({
      tripTitle,
      startDate,
      endDate,
      userId,
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

module.exports = router;
