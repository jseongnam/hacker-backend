const express = require("express");
const router = express.Router();

const userRouter = require("./routerUser");
const reviewRouter = require("./routerReview");
router.use("/users", userRouter);
router.use("/reviews", reviewRouter);
module.exports = router;
