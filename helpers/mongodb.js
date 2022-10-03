import { MongoClient } from "mongodb";
import { IS_PRODUCTION } from "../config/constants";

const MONGO = process.env.MONGODB_URI || process.env.APP_MONGODB_URI;

export const connectDB = async () => {
  if (MONGO) {
    try {
      const client = await MongoClient.connect(
        IS_PRODUCTION ? process.env.MONGODB_URI : process.env.APP_MONGODB_URI
      );
      const db = await client.db();
      return { client, db };
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  } else {
    console.log("without connection");
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
