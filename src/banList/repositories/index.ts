import { makeDb } from "@tas/database";
import BanWordRepository from "./banWordDb";

const COLLECTION = "BANWORD";

const banWordDb = new BanWordRepository({makeDb: makeDb, collectionName: COLLECTION});

export {
    banWordDb
}