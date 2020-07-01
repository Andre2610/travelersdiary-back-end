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
      res.json(allTrips);
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

module.exports = router;
