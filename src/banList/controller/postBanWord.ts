import { BanWord, BanWordClass, BanWordSchema } from "../models";

interface MakeGetBanWordsOptions {
    addBanWord: (banWordInfos:BanWordSchema) => Promise<BanWordClass>
}

export default function buildPostBanWord({addBanWord}: MakeGetBanWordsOptions) {
    return async function postBanWord(httpRequest): Promise<{banWord: BanWordClass}> {        
        const {word, language} = httpRequest.body;

        const banWord = await addBanWord({language, word});

        return {banWord};
    }
}