import { suggestionDb } from "@tas/suggestion/data-access";
import { answerDb } from "../repository";
import buildAddAnswer from "./addAnswer";
import buildFindAnswer from "./findAnswer";
import buildFindAnswerBySuggestion from "./findAnswerBySuggestion";

const findAnswer = buildFindAnswer({answerDb:answerDb});
const addAnswer = buildAddAnswer({answerDb:answerDb, suggestionDb:suggestionDb});
const findAnswerBySuggestion = buildFindAnswerBySuggestion({answerDb});

export {
    findAnswer,
    addAnswer,
    findAnswerBySuggestion,
}