import { DATABASE_CERT_LOCATION, DATABASE_NAME, DATABASE_URL } from "@tas/environment";
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

const useCert = DATABASE_CERT_LOCATION && DATABASE_CERT_LOCATION.length > 0;

const options: MongoClientOptions = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}

if (useCert) {
    const credentials = fs.readFileSync(DATABASE_CERT_LOCATION);
    options.sslKey = credentials;
    options.sslCert = credentials;
}

/**
 * Mongo client (initialize by makeDb function)
 */
const client = new MongoClient(url, options)

/**
 * This function return a database connection
 */
export async function makeDb() {
    if (!client.isConnected()) {
        await client.connect()
    }
    return client.db(dbName)
}
