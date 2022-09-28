import { MongoClient } from "mongodb";

export const connectDB = async () => {
  const client = await MongoClient.connect(process.env.REACT_APP_MONGO_URI);
  const db = await client.db();
  return { client, db };
};

export const addEmail = async (email) => {
  const { db } = await connectDB();
  await db.collection("emails").insertOne({ email });
};

export const addComment = async (comment) => {
  const { db } = await connectDB();
  return await db.collection("comments").insertOne(comment);
};

export const getAllComments = async (filter = {}) => {
  const { db } = await connectDB();
  return await db
    .collection("comments")
    .find(filter)
    .sort({ _id: -1 })
    .toArray();
};

export const closeDB = async () => {
  const { client } = await connectDB();
  client.close();
};
