import express from "express";
import cors from "cors";
import { database } from "./connect.js";

const PORT = 3000;
const app = express();
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/artists", async (request, response) => {
  response.json(await database.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.json(await database.collection("songs").find({}).toArray());
});
