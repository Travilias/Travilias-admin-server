import ResponseError from "@tas/tools/types/ResponseError";
import AnswerClass from "./AnswerClass";

interface buildAnswerOptions {
    makeId: () => string,
}

export default function buildAnswer({makeId}: buildAnswerOptions){

    const isValidId = (id:string) => true;
    const isValidTitle = (title:string) => true;
    const isValidMessage = (message:string) => true;
    const isValidSuggestionId = (suggestion_id:string) => true;

    return class Answer extends AnswerClass{

        public constructor({id = makeId(), title, message, suggestion_id }:{id?:string, title:string, message:string, suggestion_id:string}){
            super({id, title, message, suggestion_id});

            if(!isValidId(this._id)){
                throw new ResponseError("invalid id for answer", 400);
            }

            if(!isValidTitle(this._title)){
                throw new ResponseError("invalid title for answer", 400);
            }

            if(!isValidMessage(this._message)){
                throw new ResponseError("invalid message for answer", 400);
            }

            if(!isValidSuggestionId(this._suggestion_id)){
                throw new ResponseError("invalid suggestion_id for answer", 400);
            }
        }

    }

}