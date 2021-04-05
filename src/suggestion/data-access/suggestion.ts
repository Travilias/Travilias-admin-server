import makeId from "@tas/makeId";
import ResponseError from "@tas/tools/types/ResponseError";
import {Db, FilterQuery, ObjectId} from "mongodb";
import { BuildMakeSuggestionOptions, SuggestionSchema } from "../types";

interface buildSuggestionDbOptions{
    makeDb: () => Promise<Db>;
    collection: string;
}

export default function buildSuggestionDb({makeDb, collection}:buildSuggestionDbOptions){

    async function findById(id:string):Promise<SuggestionSchema> {

        const db = await makeDb();

        const res = await db.collection(collection)
                .findOne( {"_id.$oid": new ObjectId(id)} );

        if(!res) {
            // TODO : throw exeption
            return {
                id: "-1",
                message: "no suggestion found with this id",
                user: null,
                date: null
            };
        }

        const suggestion = res.ops[0];
        return {
            id: suggestion._id,
            message: suggestion.message,
            user: suggestion.user,
            date: suggestion.date
        };

    }

        // TODO : pagination
    async function findAll():Promise<SuggestionSchema[]> {

        const db = await makeDb();

        const suggestions = db.collection(collection)
                .find();

        if(!suggestions) {
            // TODO : throw exeption
            return [
                {
                    id: "-1",
                    message: "no suggestion found with this id",
                    user: null,
                    date: null
                }
            ];
        }

        return suggestions.toArray();

    }

    async function insert({
        id: _id = makeId(),
        ...SuggestionInfos
    }:SuggestionSchema):Promise<SuggestionSchema> {

        const db = await makeDb();
        const res = await db.collection(collection).insertOne({_id, ...SuggestionInfos});

        if(!res) {
            // TODO : throw exeption
            return {
                id: "-1",
                message: "no suggestion found with this id", 
                user: null,
                date: null
            };
        }

        const suggestion = res.ops[0];
        return {
            id: suggestion._id,
            message: suggestion.message,
            user: suggestion.user,
            date: suggestion.date
        };
        
    }

    return Object.freeze({
        findById,
        findAll,
        insert
    })

}
