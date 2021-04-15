import BanWordClass from "./BanWordClass";
import ResponseError from "@tas/tools/types/ResponseError";

export default function buildBanWord({makeId}){

    const isIdValid = (id:string) => true;
    const isLanguageValid = (language:string) => true;
    const isWordValid = (word:string) => true;
    const isCreatedAtValid = (createdAt:Date) => true;

    return class BanWord extends BanWordClass {

        constructor({id = makeId(), language, word, createdAt = new Date()}: {id?:string, language:string, word:string, createdAt?:Date}) {
            super({id, language, word, createdAt});

            if(!isIdValid(id)){
                throw new ResponseError("invalid value for id", 400);
            }

            if(!isLanguageValid(language)){
                throw new ResponseError("invalid value for language", 400);
            }

            if(!isWordValid(word)){
                throw new ResponseError("invalid value for word", 400);
            }

            if(!isCreatedAtValid(createdAt)){
                throw new ResponseError("invalid value for created date", 400);
            }

        }

    }

}

