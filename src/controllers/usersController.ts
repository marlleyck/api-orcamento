import express from "express";
import { api } from "../services/api";

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

  const user = users.data.filter((user: UserType) => user.id === userID);

  return res.send({ user });
};
