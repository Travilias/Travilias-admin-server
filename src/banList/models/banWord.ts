import BanWordClass from "./BanWordClass";

export default function buildBanWord({makeId}){

    const isIdValid = (id:string) => true;
    const isLanguageValid = (language:string) => true;
    const isWordValid = (word:string) => true;
    const isCreatedAtValid = (createdAt:Date) => true;

    return class BanWord extends BanWordClass {

        constructor({id = makeId(), language, word, createdAt = new Date()}: {id?:string, language:string, word:string, createdAt?:Date}) {
            super({id, language, word, createdAt});

            if(!isIdValid(id)){
                // TODO : Modifier avec ResponseError
                throw new Error("invalid value for id");
            }

            if(!isLanguageValid(language)){
                // TODO : Modifier avec ResponseError
                throw new Error("invalid value for language");
            }

            if(!isWordValid(word)){
                // TODO : Modifier avec ResponseError
                throw new Error("invalid value for word");
            }

            if(!isCreatedAtValid(createdAt)){
                // TODO : Modifier avec ResponseError
                throw new Error("invalid value for created date");
            }

        }

    }

}

