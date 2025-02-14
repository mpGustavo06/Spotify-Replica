import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://mythgustavo06:rKwYhyMbgR49Ch3@cluster.zh0ps.mongodb.net/?retryWrites=true&w=majority&appName=Cluster";

const client = new MongoClient(URI);

export const database = client.db("spotifyAula");

// const artistCollection = await database
//   .collection("artists")
//   .find({})
//   .toArray();

// const songCollection = await database.collection("songs").find({}).toArray();
