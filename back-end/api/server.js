import express from "express";
import cors from "cors";
import { database } from "./connect.js";
import path from "path";

const __dirname = path.resolve();

const PORT = 3001;
const app = express();
app.use(cors());

app.get("/api/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/api/artists", async (request, response) => {
  response.send(await database.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await database.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../front-end/dist")));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
