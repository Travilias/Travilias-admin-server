import {Db} from "mongodb";

interface MongoRepositoryOptions {
    makeDb: () => Promise<Db>;
    collection: string;
}

export abstract class MongoRepository {
    protected makeDb: () => Promise<Db>;
    protected collection: string;

    constructor({makeDb, collection}: MongoRepositoryOptions) {
        this.makeDb = makeDb;
        this.collection = collection;
    }
}
