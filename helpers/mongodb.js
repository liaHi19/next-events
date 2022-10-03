import { MongoClient } from "mongodb";

export const connectDB = async () => {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = await client.db();
    return { client, db };
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export const checkExistingDocument = async (existingDoc, collection) => {
  const { db } = await connectDB();
  return (await db.collection(collection).find(existingDoc).count()) > 0;
};

export const addDocument = async (document, collection) => {
  const { db } = await connectDB();
  return await db.collection(collection).insertOne(document);
};

export const getAllDocuments = async (collection, sort, filter = {}) => {
  const { db } = await connectDB();
  return await db.collection(collection).find(filter).sort(sort).toArray();
};

export const closeDB = async () => {
  const { client } = await connectDB();
  client.close();
};
