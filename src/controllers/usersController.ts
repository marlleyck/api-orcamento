import express from "express";
import axios from "axios";

export const getUsers = async (req: express.Request, res: express.Response) => {
  const { data } = await axios.get(
    "https://mockend.com/juunegreiros/BE-test-api/users"
  );

  const users = data;

  return res.status(200).send({ users });
};
