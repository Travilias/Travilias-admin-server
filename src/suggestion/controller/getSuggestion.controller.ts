import ResponseError from "@tas/tools/types/ResponseError";

export default function makeGetSuggestionController({getSuggestion}) {
    return async function getSuggestionController(httpRequest) {

        const id = httpRequest.query.id;

        if(!id){
            throw new ResponseError("id manquant dans la requête", 400);
        }

        if(isNaN(+id)){
            throw new ResponseError("id doit être un nombre", 400);
        }

        return await getSuggestion({id});
    }
}