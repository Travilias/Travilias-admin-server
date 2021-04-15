import { makeDb } from "@tas/database";
import ClaimRepository from "./claimDb";

const collectionName = "claims";

const ClaimDb = new ClaimRepository({makeDb, collectionName});

export {
    ClaimDb
}