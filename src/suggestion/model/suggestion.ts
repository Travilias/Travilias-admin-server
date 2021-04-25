import ResponseError from "@tas/tools/types/ResponseError";
import { BuildMakeSuggestionOptions } from "@tas/suggestion/types";
import SuggestionClass from "./SuggestionClass";

export default function buildMakeSuggestion({makeId, findUserById}: BuildMakeSuggestionOptions){

    // TODO : définir les conditions de validation des paramètres
    const isValidId = (id) => true;
    const isValidMessage = (message) => true;
    const isValidUser = (user) => true;
    const isValidDate = (date) => true;

    return class Suggestion extends SuggestionClass {

        public constructor(
            id = makeId(),
            message,
            authorId,
            date
        ){
            super(id, message, authorId, date);
            if(!isValidId(id)){
                throw new ResponseError("[Création de la suggestion] id non valide", 400);
            }

            if(!isValidMessage(message)){
                throw new ResponseError("[Création de la suggestion] message non valide", 400);
            }

            if(!isValidUser(authorId)){
                throw new ResponseError("[Création de la suggestion] authorId non valide", 400);
            }

            if(!isValidDate(date)){
                throw new ResponseError("[Création de la suggestion] date non valide", 400);
            }
        }

        public async getAuthor(){            
            this._user = await findUserById({id: this._authorId});
            console.log(this._user);
        }
    }
}

