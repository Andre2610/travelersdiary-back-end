const express = require("express");
const { Router } = express;
const router = new Router();
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");
const bcrypt = require("bcrypt");

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
