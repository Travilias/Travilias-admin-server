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

        data = await suggestionDb.findAll(limit, page);

        let suggestions:Array<SuggestionClass> = [];
        

        for(let datum of data){            
            let suggestion = new Suggestion({id: datum._id, message: datum.message, authorId: datum.user, createdAt: datum.createdAt});
            await suggestion.getAuthor();
            suggestions.push(suggestion);
        }
        

        return suggestions;

    }

}