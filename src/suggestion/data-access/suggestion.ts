import makeId from "@tas/makeId";
import ResponseError from "@tas/tools/types/ResponseError";
import {Db, FilterQuery, ObjectId} from "mongodb";
import { SuggestionSchema } from "../types";

interface buildSuggestionDbOptions{
    makeDb: () => Promise<Db>;
    collectionName: string;
}



export default class SuggestionDb {
    
    makeDb: () => Promise<Db>;
    collectionName: string;

    public constructor({makeDb, collectionName}:buildSuggestionDbOptions){
        this.makeDb = makeDb;
        this.collectionName = collectionName;
    }

    public async findById(_id:string):Promise<SuggestionSchema> {

        const db = await this.makeDb();
        console.log(_id);
        

        const res = await db.collection(this.collectionName).find({_id: new ObjectId(_id)});

        if(!res) {
            throw new ResponseError("unable to find the suggestion", 500);
        }
        

        const suggestion = (await res.toArray())[0];
        
        return {id: suggestion._id, ...suggestion};

    }

    public async findAll({start = new Date(), limit = 10, page = 0}):Promise<SuggestionSchema[]> {

        const db = await this.makeDb();

        const query: FilterQuery<SuggestionSchema> = {
            $and: [
                {createdAt: {$lte: start}}
            ]
        };

        const suggestions = await db.collection(this.collectionName).find(query).sort({createdAt: -1}).limit(+limit).skip(+(page * limit));

        if(!suggestions) {
            throw new ResponseError("unable to find the suggestions", 500);
        }

        return await suggestions.toArray();

    }

    public async insert({
        id: _id = makeId(),
        ...SuggestionInfos
    }:SuggestionSchema):Promise<SuggestionSchema> {

        const db = await this.makeDb();
        const res = await db.collection(this.collectionName).insertOne({user: SuggestionInfos.author_id, ...SuggestionInfos});

        if(!res) {
            throw new ResponseError("unable to insert the suggestion", 500);
        }

        const suggestion = res.ops[0];
        return {
            id: suggestion._id,
            message: suggestion.message,
            author_id: suggestion.user,
            createdAt: suggestion.createdAt
        };
        
    }

}