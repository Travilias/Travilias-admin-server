import { makeDb } from "@tas/database";
import AnswerRepository from "./answerRepository";

const COLLECTION = "answer";

const answerDb = new AnswerRepository({makeDb:makeDb, collectionName: COLLECTION});

export {
    answerDb
}
