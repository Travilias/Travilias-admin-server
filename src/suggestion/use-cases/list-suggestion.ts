import ResponseError from "@tas/tools/types/ResponseError";
import SuggestionDb from "../data-access/suggestion";
import { Suggestion } from "../model";
import SuggestionClass from "../model/SuggestionClass";
import { SuggestionSchema } from "../types";

interface buildListSuggestionOptions {
    suggestionDb: SuggestionDb,
}


export default function buildListSuggestion({suggestionDb}:buildListSuggestionOptions){
    

    return async function listSuggestion({limit = 10, page = 0}){

        let data;

        try {
            data = await suggestionDb.findAll(limit, page);
        }
        catch (error) {
            throw new ResponseError("listSuggestion doesn't work", 500)
        }
        finally {
            let suggestions:Array<SuggestionClass> = [];
    
            for(let datum of data){
                let suggestion = new Suggestion(datum.id, datum.message, datum.user, datum.date);
                await suggestion.getAuthor();
                suggestions.push(suggestion);
            }
            
    
            return suggestions;
        }

    }

}