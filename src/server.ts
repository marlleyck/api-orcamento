import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => console.log("Server is running at port 3000..."));
