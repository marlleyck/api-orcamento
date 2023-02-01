import express from "express";
import { api } from "../services/api";

export const getUsers = async (req: express.Request, res: express.Response) => {
  const { data } = await api.get("/users");

  const users = data;

  return res.status(200).send({ users });
};
