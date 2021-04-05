import { suggestionDb } from "../data-access";
import { makeSuggestion } from "../model";
import buildAddSuggestion from "./add-suggestion";
import buildGetSuggestion from "./get-suggestion";
import buildListSuggestion from "./list-suggestion";



const getSuggestion = buildGetSuggestion({suggestionDb, makeSuggestion});
const listSuggestion = buildListSuggestion({suggestionDb, makeSuggestion});
const addSuggestion = buildAddSuggestion({suggestionDb, makeSuggestion});

export {
    getSuggestion,
    listSuggestion,
    addSuggestion
}