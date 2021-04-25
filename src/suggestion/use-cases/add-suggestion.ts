import SuggestionDb from "../data-access/suggestion";
import { Suggestion } from "../model";
import SuggestionClass from "../model/SuggestionClass";
import { SuggestionSchema } from "../types";

interface buildListSuggestionOptions {
    suggestionDb: SuggestionDb,
}


export default function buildAddSuggestion({suggestionDb}:buildListSuggestionOptions){

    return async function addSuggestion({...suggestionsInfos}:SuggestionSchema):Promise<SuggestionClass>{

        const data = await suggestionDb.insert({...suggestionsInfos});

        let suggestion = new Suggestion(data.id, data.message, data.author_id, data.date);
        suggestion.getAuthor();

        return suggestion;

    }

}