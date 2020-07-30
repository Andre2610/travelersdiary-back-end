const User = require("../models").user;
const Trip = require("../models").trip;
const Post = require("../models").post;
const Picture = require("../models").picture;
const { toData } = require("./jwt");

async function auth(req, res, next) {
  try {
    const authHeader =
      req.headers.authorization && req.headers.authorization.split(" ");
    if (authHeader && authHeader[0] === "Bearer" && authHeader[1]) {
      try {
        const data = toData(authHeader[1]);
        const user = await User.findByPk(data.userId, {
          include: {
            model: Trip,
            include: { model: Post, include: { model: Picture } },
          },
        });
        if (!user) {
          next();
        } else {
          req.user = user;
          next();
        }
      } catch (e) {
        res.status(400).send("Invalid JWT token");
      }
    } else {
      res.status(401).send({ message: "Please supply valid credentials" });
    }
  } catch (e) {
    next(e);
  }
}

module.exports = auth;
