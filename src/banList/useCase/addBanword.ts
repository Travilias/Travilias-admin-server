import { BanWord, BanWordSchema, BanWordClass } from "../models";
import BanWordRepository from "../repositories/banWordDb";

interface buildAddBanWordOptions {
    banWordDb: BanWordRepository;
}

export default function buildAddBanWord({banWordDb}: buildAddBanWordOptions){
    return async function addBanWord(banWordInfos:BanWordSchema): Promise<BanWordClass>{

        const banWordReq = new BanWord(banWordInfos);
        

        const res = await banWordDb.insert({
            id: banWordReq.id,
            language: banWordReq.language,
            word: banWordReq.word
        });

        return new BanWord(res);

    }
}