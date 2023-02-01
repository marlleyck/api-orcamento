import express from "express";
import { getUsers } from "../controllers/usersController";

const router = express.Router();

router.get("/hello", (req, res) => {
  return res.send({ msg: "Hello World" });
});

router.get("/users", getUsers);

export default router;
