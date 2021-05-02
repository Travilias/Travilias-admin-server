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

        let suggestion = new Suggestion({id: data.id, message: data.message, authorId: data.author_id, createdAt: data.createdAt});
        await suggestion.getAuthor();
        await suggestion.getAnswer();

        return suggestion;

    }

}
