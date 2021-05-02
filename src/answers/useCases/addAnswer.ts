import SuggestionDb from "@tas/suggestion/data-access/suggestion";
import ResponseError from "@tas/tools/types/ResponseError";
import { Answer } from "../model";
import AnswerClass from "../model/AnswerClass";
import AnswerRepository from "../repository/answerRepository";
import { AnswerSchema } from "../types";


interface buildAddAnswerOptions {

    answerDb: AnswerRepository
    suggestionDb:SuggestionDb

}

export default function buildAddAnswer({answerDb, suggestionDb}: buildAddAnswerOptions){

    return async function addAnswer({answerInfos}: {answerInfos:AnswerSchema}):Promise<AnswerClass>{

        const answer = new Answer(answerInfos);

        const doublon = await answerDb.findWithFilter({filter: {suggestion_id: answerInfos.suggestion_id}});
        if(doublon.length > 0){
            throw new ResponseError("already answered", 409);
        }

        const suggestion = await suggestionDb.findById(answerInfos.suggestion_id);
        console.log(suggestion);
        
        if(!suggestion) {
            throw new ResponseError("suggestion not found", 409);
        }

        const res = await answerDb.insert({
            id: answer.id,
            title: answer.title,
            message: answer.message,
            suggestion_id: answer.suggestion_id,
        });

        return answer;

    }

}