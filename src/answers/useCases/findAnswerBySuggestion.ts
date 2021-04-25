import ResponseError from "@tas/tools/types/ResponseError";
import { ObjectId } from "bson";
import { Answer } from "../model";
import AnswerClass from "../model/AnswerClass";
import AnswerRepository from "../repository/answerRepository";


interface buildFindAnswerBySuggestionOptions {
    answerDb:AnswerRepository
}

export default function buildFindAnswerBySuggestion({answerDb}: buildFindAnswerBySuggestionOptions){

    return async function findAnswerBySuggestion({suggestion_id}:{suggestion_id:string}):Promise<AnswerClass>{

        const answerInfos = (await answerDb.findWithFilter({filter: {suggestion_id: '' + suggestion_id}}))[0];
        if(!answerInfos){
            return null;
        }

        const answer = new Answer({id: answerInfos.id, message: answerInfos.message, title: answerInfos.title, suggestion_id: answerInfos.suggestion_id});

        return answer;
        

    }

}