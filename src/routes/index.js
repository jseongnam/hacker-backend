const express = require("express");
const router = express.Router();

const userRouter = require("./routerUser");
router.use("/users", userRouter);

module.exports = router;
