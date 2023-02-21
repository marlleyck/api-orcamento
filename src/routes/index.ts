import express from "express";
import { getUsers, returnBudget } from "../controllers/usersController";
import { getProducts } from "../controllers/productsController";

const router = express.Router();

router.get("/users", getUsers);

router.post("/user/budget", returnBudget);

router.get("/products", getProducts);

export default router;
