const express = require("express");
const userRouter = require("./router/user");
const authRouter = require("./router/auth");
// const productRouter = require("./router/product");
// const categoryRouter = require("./router/category");
// const ordersRouter = require("./router/order");
const authMiddleware = require("./auth/middleware");
const cors = require("cors");
const app = express();
const port = 5000;
const jsonParser = express.json();

app.use(cors());
app.use(jsonParser);
app.use("/auth", authRouter);
app.use("/users", userRouter);
// app.use("/products", productRouter);
// app.use("/category", categoryRouter);
// app.use("/orders", ordersRouter);
app.listen(port, () => console.log("Listening to port", port));
