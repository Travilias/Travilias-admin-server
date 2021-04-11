import { Suggestion, SuggestionSchema } from "../types";

interface buildListSuggestionOptions {
    suggestionDb: Readonly<{
        findById: (id:string) => Promise<SuggestionSchema>,
        findAll: () => Promise<SuggestionSchema[]>,
        insert: ({}:SuggestionSchema) => Promise<SuggestionSchema>
    }>,
    makeSuggestion: ({}:SuggestionSchema) => Suggestion
}


export default function buildListSuggestion({suggestionDb, makeSuggestion}:buildListSuggestionOptions){

    // TODO : pagination
    return async function listSuggestion({}){

        const data = await suggestionDb.findAll();
        let suggestions:Array<Suggestion> = [];

        for(let datum of data){
            let suggestion = makeSuggestion(datum);
            suggestions.push(suggestion);
        }

        return suggestions;

    }

}