import mongoose from "mongoose";

const FALLBACK_URI = "mongodb://yugnextwork_db_user:P4zM8kwFm3SfQR44@ac-ejaf8e3-shard-00-00.mqvrsss.mongodb.net:27017,ac-ejaf8e3-shard-00-01.mqvrsss.mongodb.net:27017,ac-ejaf8e3-shard-00-02.mqvrsss.mongodb.net:27017/yugnext?ssl=true&replicaSet=atlas-367a0p-shard-0&authSource=admin";

let cached = (global as unknown as { mongoose: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } }).mongoose;

if (!cached) {
  cached = (global as unknown as { mongoose: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } }).mongoose = {
    conn: null,
    promise: null,
  };
}

export async function connectDB() {
  const uri = process.env.MONGODB_URI || FALLBACK_URI;

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(uri, opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
