import { makeDb } from "@tas/database";
import buildSuggestionDb from "./suggestion";

const collection = "suggestion";

const suggestionDb = buildSuggestionDb({makeDb, collection});

export {
    suggestionDb
}
