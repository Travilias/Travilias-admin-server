
interface Suggestion {
    getId: () => string,
    getMessage: () => string,
    getUser: () => number, // TODO : modifier des que l'on a un type user
    getDate: () => string
}

interface SuggestionSchema {
    id: string;
    message: string;
    user: number; // TODO : modifier des que l'on a un type user
    date: string;
}

interface BuildMakeSuggestionOptions {
    makeId: () => string
}

export {
    SuggestionSchema,
    BuildMakeSuggestionOptions,
    Suggestion
}
