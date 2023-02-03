import express from "express";
import { getUsers, getBudget } from "../controllers/usersController";
import { getProducts } from "../controllers/productsController";

const router = express.Router();

router.get("/users", getUsers);

router.get("/user/budget", getBudget);

router.get("/products", getProducts);

export default router;
