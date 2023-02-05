import express from "express";
import { api } from "../services/api";

export const getProducts = async (
  req: express.Request,
  res: express.Response
) => {
  const { data } = await api.get("/products");

  // Validation
  if (!data) {
    return res.status(404).send({ error: "No products found!" });
  }

  const products = data;

  return res.send({ products });
};
