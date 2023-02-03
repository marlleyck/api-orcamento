import express from "express";
import cors from "cors";

import router from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

app.listen(3333, () => console.log("Server is running at port 3000..."));
