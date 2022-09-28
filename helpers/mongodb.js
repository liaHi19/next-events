import { MongoClient } from "mongodb";

export const connectDB = async () => {
  try {
    const client = await MongoClient.connect(process.env.REACT_APP_MONGO_URI);
    const db = await client.db();
    return { client, db };
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export const addDocument = async (comment, collection) => {
  const { db } = await connectDB();
  return await db.collection(collection).insertOne(comment);
};

export const getAllComments = async (collection, sort, filter = {}) => {
  const { db } = await connectDB();
  return await db.collection(collection).find(filter).sort(sort).toArray();
};

export const closeDB = async () => {
  const { client } = await connectDB();
  client.close();
};
