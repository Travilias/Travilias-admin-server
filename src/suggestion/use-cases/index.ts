import { suggestionDb } from "../data-access";
import { makeSuggestion } from "../model";
import buildGetSuggestion from "./get-suggestion";



const getSuggestion = buildGetSuggestion({suggestionDb, makeSuggestion});