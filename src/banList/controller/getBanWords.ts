import { BanWordClass } from "../models";

interface MakeGetBanWordsOptions {
    listBanWord
}

export default function buildGetBanWords({listBanWord}: MakeGetBanWordsOptions) {
    return async function getBanWords(httpRequest): Promise<{banWords: BanWordClass[]}> {
        const {limit, page, start} = httpRequest.query;

        const options: any = {};

        if (limit) {
            const _limit = parseInt(limit);
            if (isNaN(_limit)) {
                throw Error("Bad request");
            }
            options.limit = _limit;
        }

        if (page) {
            const _page = parseInt(page);
            if (isNaN(_page)) {
                throw Error("Bad request");
            }
            options.page = _page;
        }

        if (start) {
            const _start = new Date(start);
            if (isNaN(_start.getTime())) {
                throw new Error("Bad request");
            }
            options.start = _start;
        }

        const banWords = await listBanWord(options);

        return {banWords};
    }
}