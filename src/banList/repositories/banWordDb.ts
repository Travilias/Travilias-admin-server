import { Db, FilterQuery } from "mongodb";
import { BanWordSchema } from "../models";

export default class BanWordRepository {
    protected makeDb: () => Promise<Db>;
    protected collectionName: string;


    constructor(options: {makeDb, collectionName}) {
        this.makeDb = options.makeDb;
        this.collectionName = options.collectionName;
    }

    async findAll({start = new Date(), limit = 10, page = 0}): Promise<BanWordSchema[]> {
        const db = await this.makeDb();
        
        const query: FilterQuery<BanWordSchema> = {
            $and: [
                {createdAt: {$lt: start}}
            ]
        };


        const pages = db.collection(this.collectionName).find(query).limit(limit).skip(page * limit);

        // Map the query result
        return (await pages.toArray()).map(({_id: id, ...banWord}) => ({
            id,
            ...banWord
        }));
    }

    async insert({id: _id, ...banWordInfos}: BanWordSchema): Promise<BanWordSchema> {
        const db = await this.makeDb();
        const result = await db.collection(this.collectionName).insertOne({_id, ...banWordInfos});
        const {_id: id, ...insertedInfos} = result.ops[0];
        return {id, ...insertedInfos};
    }

    async delete({id: _id}): Promise<BanWordSchema[]> {
        const db = await this.makeDb();
        const res = db.collection("customers").deleteOne({_id: _id});

        if (!res){
            throw new Error("cannot delete this ban word");
        }

        else {
            return await this.findAll({});
        }
    }

}