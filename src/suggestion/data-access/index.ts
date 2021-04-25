import { makeDb } from "@tas/database";
import SuggestionDb from "./suggestion";

const collectionName = "suggestion";

const suggestionDb = new SuggestionDb({makeDb, collectionName});

export {
    suggestionDb
}
