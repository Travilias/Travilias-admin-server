import { makeDb } from "@tas/database";
import { ObjectId } from "bson";
import AnswerRepository from "./answerRepository";

interface filterAnswer {
    id?:string;
    title?:string;
    message?:string;
    suggestion_id?:string
}

const COLLECTION = "answer";

const answerDb = new AnswerRepository({makeDb:makeDb, collectionName: COLLECTION});

export {
    answerDb,
    filterAnswer
}
