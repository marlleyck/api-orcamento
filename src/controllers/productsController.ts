import express from "express";
import axios from "axios";

export const getProducts = async (
  req: express.Request,
  res: express.Response
) => {
  const { data } = await axios.get(
    "https://mockend.com/juunegreiros/BE-test-api/products"
  );

  const products = data;

  return res.send({ products });
};
