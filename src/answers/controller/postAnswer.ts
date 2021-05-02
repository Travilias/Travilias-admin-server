import ResponseError from "@tas/tools/types/ResponseError";
import AnswerClass from "../model/AnswerClass";
import { AnswerSchema } from "../types";

interface buildPostAnswerOptions {

    addAnswer: ({answerInfos}:{answerInfos:AnswerSchema}) => Promise<AnswerClass>;

}

export default function buildPostAnswer({addAnswer}: buildPostAnswerOptions){

    return async function postAnswer(httpRequest):Promise<AnswerClass>{

        const {title, message, suggestion_id} = httpRequest.body;

        if(!title){
            throw new ResponseError("title non available", 400);
        }

        if(!message){
            throw new ResponseError("id message available", 400);
        }

        if(!suggestion_id){
            throw new ResponseError("suggestion_id non available", 400);
        }

        return await addAnswer({answerInfos: {title, message, suggestion_id}});

    }

}