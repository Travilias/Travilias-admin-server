import ResponseError from "@tas/tools/types/ResponseError";
import { SuggestionSchema, BuildMakeSuggestionOptions } from "@tas/suggestion/types";

export default function buildMakeSuggestion({makeId}: BuildMakeSuggestionOptions){

    // TODO : définir les conditions de validation des paramètres
    const isValidId = (id) => true;
    const isValidMessage = (message) => true;
    const isValidUser = (user) => true;
    const isValidDate = (date) => true;

    return async function makeSuggestion({
        id = makeId(),
        message,
        user,
        date
    }:SuggestionSchema) {

        if(!isValidId(id)){
            throw new ResponseError("[Création de la suggestion] id non valide", 400);
        }

        if(!isValidMessage(message)){
            throw new ResponseError("[Création de la suggestion] message non valide", 400);
        }

        if(!isValidUser(user)){
            throw new ResponseError("[Création de la suggestion] user non valide", 400);
        }

        if(!isValidDate(date)){
            throw new ResponseError("[Création de la suggestion] date non valide", 400);
        }

        return Object.freeze({
            getId: () => id,
            getMessage: () => message,
            getUser: () => user,
            getDate: () => date
        });

    }
}