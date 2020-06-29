const express = require("express");
const { Router } = express;
const router = new Router();
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");
const bcrypt = require("bcrypt");

// GET all users profile
router.get("/", async (req, res, next) => {
  console.log("do i get here");
  try {
    const getUser = await User.findAll();
    if (!getUser) {
      res.status(404).send("User not found");
    } else {
      res.json(getUser);
    }
  } catch (e) {
    next(e);
  }
});

// GET user profile
router.get("/:userId", async (req, res, next) => {
  try {
    const id = parseInt(req.params.userId);
    const getUser = await User.findByPk(id);
    if (!getUser) {
      res.status(404).send("User not found");
    } else {
      res.json(getUser);
    }
  } catch (e) {
    next(e);
  }
});
// PATCH edit user profile
router.patch("/:userId", async (req, res, next) => {
  try {
    const id = parseInt(req.params.userId);
    const getUserToUpdate = await User.findByPk(id);

    if (!getUserToUpdate) {
      res.status(404).send("User not found");
    } else {
      const updatedUser = await getUserToUpdate.update(req.body);
      res.json(updatedUser);
    }
  } catch (e) {
    next(e);
  }
});

// DELETE a user
router.delete("/:userId", async (req, res, next) => {
  try {
    const id = parseInt(req.params.userId);
    const userToDelete = await User.findByPk(id);
    if (!userToDelete) {
      res.status(404).send("User not found");
    } else {
      const deleted = userToDelete.destroy();
      res.json(deleted);
    }
  } catch (e) {
    next(e);
  }
});
module.exports = router;
