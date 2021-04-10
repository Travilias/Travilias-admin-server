export default function makePostSuggestionController ({addSuggestion}) {
    return async function postSuggestion(httpRequest) {
        const {...suggestionInfos} = httpRequest.body;

        const suggestion = await addSuggestion({
            ...suggestionInfos
        });

        return {suggestion};
    }
}