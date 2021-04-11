import { BanWord, BanWordSchema, BanWordClass } from "../models";
import BanWordRepository from "../repositories/banWordDb";

interface buildAddBanWordOptions {
    banWordDb: BanWordRepository;
}

export default function buildAddBanWord({banWordDb}: buildAddBanWordOptions){
    return async function addBanWord({banWordInfos}: {banWordInfos:BanWordSchema}): Promise<BanWordClass>{

        const res = await banWordDb.insert(banWordInfos);

        return new BanWord(res);

    }
}