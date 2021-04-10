export default function makeListSuggestionController({listSuggestion}: {listSuggestion: ({limit,page,start,unControlled}) => Promise<any>}) {
    return async function listSuggestionController(httpRequest) {

        const {limit, page, start, unControlled} = httpRequest.query;

        return await listSuggestion({
            limit,
            page,
            start,
            unControlled
        });
    }
}