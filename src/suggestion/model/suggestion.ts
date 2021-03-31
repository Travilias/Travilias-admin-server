// TODO : Remplacer par @tas des que les branches sont mergées
import { SuggestionSchema, BuildMakeSuggestionOptions } from "../types";

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

        

        return Object.freeze({
            getId: () => id,
            getMessage: () => message,
            getUser: () => user,
            getDate: () => date
        });

    }
}