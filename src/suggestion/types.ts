import UserClass from "@tas/users/models/UserClass";

interface SuggestionSchema {
    id: string;
    message: string;
    author_id: string; 
    date: string;
}

interface BuildMakeSuggestionOptions {
    makeId: () => string,
    findUserById: ({id}:{id:string}) => Promise<UserClass>;
}

export {
    SuggestionSchema,
    BuildMakeSuggestionOptions,
}
