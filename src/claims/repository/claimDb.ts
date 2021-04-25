import { Db, ObjectId } from "mongodb";
import ClaimClass from "../model/ClaimClass";

export default class ClaimRepository {

    private makeDb: () => Promise<Db>;
    private collectionName:string

    public constructor({makeDb, collectionName}: {makeDb, collectionName}) {
        this.makeDb = makeDb;
        this.collectionName = collectionName;
    }

    // TODO : better types (it does not return a class !)
    public async insert({id: _id, ...claimInfos}: any): Promise<any> {
        const db = await this.makeDb();
        const result = await db.collection(this.collectionName).insertOne({_id, ...claimInfos});
        const {_id: id, ...insertedInfos} = result.ops[0];
        return {id, ...insertedInfos};
    }

    // TODO : better types (it does not return a class !)
    public async findById(id:string):Promise<ClaimClass> {
        const db = await this.makeDb();

        const res = await db.collection(this.collectionName)
                .findOne( {"_id.$oid": new ObjectId(id)} );

        const claim = res.ops[0];

        return claim;
    }

}