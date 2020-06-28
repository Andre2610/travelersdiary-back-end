const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const User = require("../models").user;
const bcrypt = require("bcrypt");

const router = new Router();

// CREATE a new user
router.post("/signup", async (req, res, next) => {
  try {
    const { email, password, firstName, lastName, title, about } = req.body;
    console.log("What are my parameters", req.body);
    if (!email || !password || !firstName || !lastName || !title) {
      res.status(400).send("missing parameters");
    } else {
      const hashedPassword = bcrypt.hashSync(password, 10);
      if (!about) about = "";
      const newUser = await User.create({
        firstName,
        lastName,
        password: hashedPassword,
        address,
        title,
        about,
      });
      res.json(newUser);
    }
  } catch (e) {
    next(e);
  }
});

router.post("/login", async (req, res, next) => {
  // login logic
  try {
    const { email, password } = req.body;
    if (!email || !password || email === " " || password === " ") {
      res
        .status(400)
        .send({ message: "Please supply a valid email and password" });
    } else {
      const user = await User.findOne({ where: { email } });
      //   console.log("Did it find a user?", user);
      //   console.log(
      //     "does the password match?",
      //     bcrypt.compareSync(password, user.password)
      //   );
      if (!user) {
        res.status(404).send({ message: "User not found" });
      } else if (bcrypt.compareSync(password, user.password)) {
        const jwt = toJWT({ userId: user.id });
        // console.log("my token", jwt);
        res.send({ jwt });
      } else {
        res.status(400).send({ message: "Email or password incorrect" });
      }
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
