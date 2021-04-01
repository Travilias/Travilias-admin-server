import { Suggestion, SuggestionSchema } from "../types"

interface buildGetSuggestionOptions {
    suggestionDb: Readonly<{
        findById: (id:string) => Promise<SuggestionSchema>,
        findAll: () => Promise<SuggestionSchema[]>
    }>,
    makeSuggestion: ({}:SuggestionSchema) => Suggestion
}

export default function buildGetSuggestion({suggestionDb, makeSuggestion}:buildGetSuggestionOptions){

    return async function getSuggestion({id}:{id:string}) {

        const data = await suggestionDb.findById(id);

        return makeSuggestion(data);

    }

}
