require("dotenv").config();
const express = require("express");
const userRouter = require("./router/user");
const authRouter = require("./router/auth");
const tripRouter = require("./router/trip");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const jsonParser = express.json();
const fileupload = require("express-fileupload");

app.use(fileupload({ useTempFiles: true }));
app.use(cors());
app.use(jsonParser);
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/trips", tripRouter);
app.listen(port, () => console.log("Listening to port", port));
