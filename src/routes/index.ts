import express from "express";
import { getUsers } from "../controllers/usersController";
import { getProducts } from "../controllers/productsController";

const router = express.Router();

router.get("/users", getUsers);

router.get("/products", getProducts);

export default router;
