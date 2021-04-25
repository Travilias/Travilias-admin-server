import ResponseError from "@tas/tools/types/ResponseError";
import { BanWord, BanWordSchema, BanWordClass } from "../models";
import BanWordRepository from "../repositories/banWordDb";

interface buildAddBanWordOptions {
    banWordDb: BanWordRepository;
}

export default function buildAddBanWord({banWordDb}: buildAddBanWordOptions){
    return async function addBanWord(banWordInfos:BanWordSchema): Promise<BanWordClass>{

        const hasDouble = await banWordDb.findOne(banWordInfos);

        if(hasDouble) {
            throw new ResponseError("already addeed", 409);
        }

        const banWordReq = new BanWord(banWordInfos);
        

        const res = await banWordDb.insert({
            id: banWordReq.id,
            language: banWordReq.language,
            word: banWordReq.word
        });

        return new BanWord(res);

    }
}