import {
    DATABASE_CERT,
    DATABASE_CERT_LOCATION,
    DATABASE_NAME,

    DATABASE_URL
} from "@tas/environment";
import * as fs from "fs";
import { MongoClient, MongoClientOptions } from "mongodb";

/**
 * Urlof the database (get from environment variables)
 */
const url = DATABASE_URL;
/**
 * Name of the database (from environment variables)
 */
const dbName = DATABASE_NAME;

/**
 * boolean representing if the connection needs a certificate to authentify
 */
const useCert =
  (DATABASE_CERT_LOCATION && DATABASE_CERT_LOCATION.length > 0) ||
  (DATABASE_CERT && DATABASE_CERT.length > 0);

/**
 * Options used to connect to the MongoDb database
 */
const options: MongoClientOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


if (useCert) {
  if (DATABASE_CERT_LOCATION && DATABASE_CERT_LOCATION.length > 0) {
    const credentials = fs.readFileSync(DATABASE_CERT_LOCATION).toString();
    console.log(credentials);
    options.sslKey = credentials;
    options.sslCert = credentials;
  } else {
    const credentials = Buffer.from(DATABASE_CERT)
    options.sslKey = credentials;
    options.sslCert = credentials;
    console.log(DATABASE_CERT);
  }
}

console.log(url, options)

/**
 * Mongo client (initialize by makeDb function)
 */
const client = new MongoClient(url, options);

/**
 * This function return a database connection
 */
export async function makeDb() {
  if (!client.isConnected()) {
    await client.connect();
  }
  return client.db(dbName);
}
