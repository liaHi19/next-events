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

export const closeDB = async () => {
  const { client } = await connectDB();
  client.close();
};
