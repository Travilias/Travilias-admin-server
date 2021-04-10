import makeId from "@tas/makeId";
import BanWordClass from "./BanWordClass";
import buildBanWord from "./banWord";

interface BanWordSchema {
    id?:string;
    word:string
    language:string;
    createdAt?:Date;
}

const BanWord = buildBanWord({makeId});

export {
    BanWord,
    BanWordSchema,
    BanWordClass
}