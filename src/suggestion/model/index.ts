import { findAnswerBySuggestion } from "@tas/answers/useCases";
import makeId from "@tas/makeId";
import { findUser } from "@tas/users/use-cases";
import buildMakeSuggestion from "./suggestion";


const Suggestion = buildMakeSuggestion({makeId, findUserById: findUser, findAnswerBySuggestionId: findAnswerBySuggestion});

export {
    Suggestion
}