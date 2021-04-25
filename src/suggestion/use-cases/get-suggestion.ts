import SuggestionDb from "../data-access/suggestion";
import { Suggestion } from "../model";
import SuggestionClass from "../model/SuggestionClass";
import { SuggestionSchema } from "../types"

interface buildGetSuggestionOptions {
    suggestionDb:SuggestionDb;
}

export default function buildGetSuggestion({suggestionDb}:buildGetSuggestionOptions){

    return async function getSuggestion({id}:{id:string}):Promise<SuggestionClass> {

        const data = await suggestionDb.findById(id);

        let suggestion = new Suggestion(data.id, data.message, data.author_id, data.date);
        suggestion.getAuthor();

        return suggestion;

    }

}
