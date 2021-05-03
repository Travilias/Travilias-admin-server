import { BanWordClass } from "../models";

interface MakeGetBanWordsOptions {
    listBanWord
}

export default function buildGetBanWords({listBanWord}: MakeGetBanWordsOptions) {
    return async function getBanWords(httpRequest): Promise<{banWords: BanWordClass[]}> {

        const banWords = await listBanWord({});

        return banWords;
    }
}