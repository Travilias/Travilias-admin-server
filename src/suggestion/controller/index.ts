import { addSuggestion, getSuggestion, listSuggestion } from "../use-cases";
import makeGetSuggestionController from "./getSuggestion.controller";
import makeListSuggestionController from "./listSuggestion.controller";
import makePostSuggestionController from "./postSuggestion.controller";

const getSuggestionController = makeGetSuggestionController({getSuggestion});
const postSuggestionController  = makePostSuggestionController({addSuggestion});
const listSuggestionController  = makeListSuggestionController({listSuggestion});

export {
    getSuggestionController ,
    postSuggestionController ,
    listSuggestionController 
}