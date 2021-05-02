import ResponseError from "@tas/tools/types/ResponseError";
import SuggestionDb from "../data-access/suggestion";
import { Suggestion } from "../model";
import SuggestionClass from "../model/SuggestionClass";
import { SuggestionSchema } from "../types";

interface buildListSuggestionOptions {
    suggestionDb: SuggestionDb,
}


export default function buildAddSuggestion({suggestionDb}:buildListSuggestionOptions){

    return async function addSuggestion(suggestionsInfos:SuggestionSchema):Promise<SuggestionClass>{

        const {message, author_id} = suggestionsInfos;

        if(!message){
            throw new ResponseError("message not existing", 400);
        }

        if(!author_id){
            throw new ResponseError("author_id not existing", 400);
        }

        suggestionsInfos.createdAt = new Date();
        

        const data = await suggestionDb.insert({...suggestionsInfos});

        let suggestion = new Suggestion({id: data.id, message: data.message, authorId: data.author_id, createdAt: data.createdAt});
        suggestion.getAuthor();

        return suggestion;

    }

}