import makeId from "@tas/makeId";
import buildMakeSuggestion from "./suggestion";

const makeSuggestion = buildMakeSuggestion({makeId});

export {
    makeSuggestion
}