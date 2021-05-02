import ResponseError from "@tas/tools/types/ResponseError";
import { Db, ObjectId } from "mongodb";
import { filterAnswer } from ".";
import { AnswerSchema } from "../types";

interface AnswerRepositoryOptions {
    makeDb: () => Promise<Db>;
    collectionName:string;
}

export default class AnswerRepository {

    private makeDb: () => Promise<Db>;
    private collectionName:string;

    public constructor({makeDb, collectionName}: AnswerRepositoryOptions){
        this.makeDb = makeDb;
        this.collectionName = collectionName;
    }

    public async findById({id}:{id:string}):Promise<AnswerSchema>{
        const db = await this.makeDb();

        const res = await db.collection(this.collectionName).find({_id: id});

        if(!res){
            throw new ResponseError("unable to find answer with this id", 500);
        }

        return await res.toArray()[0];

    }
    
    public async findWithFilter({filter}: {filter:filterAnswer}):Promise<AnswerSchema[]>{
        const db = await this.makeDb();
        

        const res = await db.collection(this.collectionName).find(filter);

        if(!res){
            throw new ResponseError("unable to find answer with these filters", 500);
        }
        

        return await res.toArray();
    }


    public async insert({id: id, ...answer}:AnswerSchema):Promise<AnswerSchema>{
        const db = await this.makeDb();

        const res = await db.collection(this.collectionName).insertOne({id, ...answer});

        if(!res){
            throw new ResponseError("unable to insert answer", 500);
        }

        return res.ops[0];

    }

}