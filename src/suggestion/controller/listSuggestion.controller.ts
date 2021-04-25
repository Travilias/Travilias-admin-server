export default function makeListSuggestionController({listSuggestion}: {listSuggestion: ({limit,page}) => Promise<any>}) {
    return async function listSuggestionController(httpRequest) {

        const {limit, page} = httpRequest.query;

        return await listSuggestion({
            limit,
            page,
        });
    }
}