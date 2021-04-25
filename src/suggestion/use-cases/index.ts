import { suggestionDb } from "../data-access";
import buildAddSuggestion from "./add-suggestion";
import buildGetSuggestion from "./get-suggestion";
import buildListSuggestion from "./list-suggestion";



const getSuggestion = buildGetSuggestion({suggestionDb});
const listSuggestion = buildListSuggestion({suggestionDb});
const addSuggestion = buildAddSuggestion({suggestionDb});

export {
    getSuggestion,
    listSuggestion,
    addSuggestion,
}