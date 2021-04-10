import { BanWordClass, BanWordSchema } from "../models";

interface MakeGetBanWordsOptions {
    addBanWord: ({banWordInfos}: {banWordInfos:BanWordSchema}) => Promise<BanWordClass>
}

export default function buildPostBanWord({addBanWord}: MakeGetBanWordsOptions) {
    return async function postBanWord(httpRequest): Promise<{banWord: BanWordClass}> {
        const {word, language} = httpRequest.query;

        if(!word){
            throw new Error("word property not found in request");
        }

        if(!language){
            throw new Error("language property not found in request");
        }

        const banWordInfos = {
            word,
            language,
        }

        const banWord = await addBanWord({banWordInfos});

        return {banWord};
    }
}