import ResponseError from "@tas/tools/types/ResponseError";

export default function makeGetSuggestionController({getSuggestion}) {
    return async function getSuggestionController(httpRequest) {

        const id = httpRequest.params.id;

        if(!id){
            throw new ResponseError("id manquant dans la requête", 400);
        }

        return await getSuggestion({id});
    }
}