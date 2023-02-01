import axios from "axios";

export const api = axios.create({
  baseURL: "https://mockend.com/juunegreiros/BE-test-api",
});
