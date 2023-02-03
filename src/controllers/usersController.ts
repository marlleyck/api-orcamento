import express from "express";
import { api } from "../services/api";

import { percentageOfBudget } from "../utils/percentage_of_budget";

import { UserType } from "../@types/UserType";

export const getUsers = async (req: express.Request, res: express.Response) => {
  const { data } = await api.get("/users");

  const users = data;

  return res.status(200).send({ users });
};

export const getBudget = async (
  req: express.Request,
  res: express.Response
) => {
  const { userID, productsID } = req.body;

  const users = await api.get("/users");
  const productsResponse = await api.get("/products");

  const user: UserType[] = users.data.filter(
    (user: UserType) => user.id === userID
  );

  const products = productsResponse.data.filter((product: any) =>
    productsID.includes(product.id)
  );

  const userTax = user[0].tax;
  const budgetPercent = percentageOfBudget(userTax, products);

  return res.send({ products, budgetPercent });
};
