import { suggestionDb } from "@tas/suggestion/data-access";
import { answerDb } from "../repository";
import buildAddAnswer from "./addAnswer";
import buildFindAnswer from "./findAnswer";

const findAnswer = buildFindAnswer({answerDb:answerDb});
const addAnswer = buildAddAnswer({answerDb:answerDb, suggestionDb:suggestionDb});

export {
    findAnswer,
    addAnswer,
}