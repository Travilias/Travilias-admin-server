import UserClass from "@tas/users/models/UserClass";

interface SuggestionSchema {
    id: string;
    message: string;
    author_id: string; 
    createdAt: Date;
}

export {
    SuggestionSchema,
}
