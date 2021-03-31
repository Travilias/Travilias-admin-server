

interface SuggestionSchema {
    id: string;
    message: string;
    user: string; // TODO : modifier des que l'on a un type user
    date: string;
}

interface BuildMakeSuggestionOptions {
    makeId: () => string
}

export {
    SuggestionSchema,
    BuildMakeSuggestionOptions
}