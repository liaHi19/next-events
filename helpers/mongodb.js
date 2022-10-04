import { MongoClient } from "mongodb";
import { IS_PRODUCTION } from "../config/constants";

const MONGODB_URI_CHECK = IS_PRODUCTION
  ? process.env.MONGODB_URI
  : process.env.APP_MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_NAME;

// check the MongoDB URI
if (!MONGODB_URI_CHECK) {
  throw new Error("Define the MONGODB_URI environmental variable");
}

// check the MongoDB DB
if (!MONGODB_DB) {
  throw new Error("Define the MONGODB_DB environmental variable");
}

let cachedClient = null;
let cachedDb = null;

export const connectDB = async () => {
  if (cachedClient && cachedDb) {
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  const client = new MongoClient(MONGODB_URI_CHECK, opts);
  await client.connect();
  const db = client.db(MONGODB_DB);

  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb,
  };
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
