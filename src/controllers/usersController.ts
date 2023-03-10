import { Request, Response } from "express";
import { api } from "../services/api";

import { percentageOfBudget } from "../utils/percentage_of_budget";

import { UserType } from "../@types/UserType";
import { ProductType } from "../@types/ProductType";

export const getUsers = async (req: Request, res: Response) => {
  const { data } = await api.get("/users");

  if (!data) {
    return res.status(404).send({ error: "No users found!" });
  }

  const users = data;

  return res.status(200).send({ users });
};

export const returnBudget = async (req: Request, res: Response) => {
  const { userID, productsID } = req.body;

  if (!userID) {
    return res.status(404).send({ error: "User ID cannot be empty!" });
  }

  if (!productsID) {
    return res.status(404).send({ error: "Products ID cannot be empty!" });
  }

  const users = await api.get("/users");
  if (!users) {
    return res.status(404).send({ error: "No users found!" });
  }

  const productsResponse = await api.get("/products");
  if (!productsResponse) {
    return res.status(404).send({ error: "No products found!" });
  }

  const user: UserType[] = users.data.filter(
    (user: UserType) => user.id === userID
  );
  if (!user) {
    return res.status(404).send({ error: "User not found!" });
  }

  const products = productsResponse.data.filter((product: ProductType) =>
    productsID.includes(product.id)
  );
  if (!products) {
    return res.status(404).send({ error: "Products not found!" });
  }

  const userTax = user[0].tax;
  const budgetPercent = percentageOfBudget(userTax, products);

  return res.status(200).send({ budgetPercent });
};
