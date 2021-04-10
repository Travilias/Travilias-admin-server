import { BanWordClass, BanWordSchema } from "../models";

interface MakeDeleteBanWordsOptions {
    removeBanWord: ({id: id}) => Promise<BanWordClass[]>
}

export default function buildDeleteBanWord({removeBanWord}: MakeDeleteBanWordsOptions) {
    return async function deleteBanWord(httpRequest): Promise<{banWords: BanWordClass[]}> {
        const {id} = httpRequest.query;

        const banWords = await removeBanWord({id});

        return {banWords};
    }
}