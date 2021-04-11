import { Suggestion, SuggestionSchema } from "../types";

interface buildListSuggestionOptions {
    suggestionDb: Readonly<{
        findById: (id:string) => Promise<SuggestionSchema>,
        findAll: () => Promise<SuggestionSchema[]>,
        insert: ({}:SuggestionSchema) => Promise<SuggestionSchema>
    }>,
    makeSuggestion: ({}:SuggestionSchema) => Suggestion
}


export default function buildAddSuggestion({suggestionDb, makeSuggestion}:buildListSuggestionOptions){

    return async function addSuggestion({...suggestionsInfos}:SuggestionSchema){

        const suggestion = await suggestionDb.insert({...suggestionsInfos});

        return makeSuggestion(suggestion);

    }

}