import { Answer } from "@tas/answers/model";
import AnswerClass from "@tas/answers/model/AnswerClass";
import { filterAnswer } from "@tas/answers/repository";
import { AnswerSchema } from "@tas/answers/types";
import ResponseError from "@tas/tools/types/ResponseError";
import UserClass from "@tas/users/models/UserClass";
import SuggestionClass from "./SuggestionClass";


interface BuildMakeSuggestionOptions {
    makeId: () => string,
    findUserById: ({id}:{id:string}) => Promise<UserClass>;
    findAnswerBySuggestionId: ({suggestion_id}: {suggestion_id:string}) => Promise<AnswerClass>;
}

export default function buildMakeSuggestion({makeId, findUserById, findAnswerBySuggestionId}: BuildMakeSuggestionOptions){

    // TODO : définir les conditions de validation des paramètres
    const isValidId = (id) => true;
    const isValidMessage = (message) => true;
    const isValidUser = (user) => true;
    const isValidDate = (date) => true;

    return class Suggestion extends SuggestionClass {

        public constructor(
            {id = makeId(),
            message,
            authorId,
            createdAt}
        ){
            
            super({id, message, authorId, createdAt});
            if(!isValidId(id)){
                throw new ResponseError("[Création de la suggestion] id non valide", 400);
            }

            if(!isValidMessage(message)){
                throw new ResponseError("[Création de la suggestion] message non valide", 400);
            }

            if(!isValidUser(authorId)){
                throw new ResponseError("[Création de la suggestion] authorId non valide", 400);
            }

            if(!isValidDate(createdAt)){
                throw new ResponseError("[Création de la suggestion] createdAt non valide", 400);
            }
        }

        public async getAuthor(){            
            this._user = await findUserById({id: this._authorId});
        }

        public async getAnswer(){
            let answer = await findAnswerBySuggestionId({suggestion_id: this._id});
            this._answer = answer;
        }
    }
}

