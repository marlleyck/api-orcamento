import express from "express";

const router = express.Router();

router.get("/hello", (req, res) => {
  return res.send({ msg: "Hello World" });
});

export default router;
