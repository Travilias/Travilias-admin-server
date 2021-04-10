import { BanWord, BanWordClass } from "../models";
import BanWordRepository from "../repositories/banWordDb";

interface buildListBanWordOptions {
    banWordDb: BanWordRepository;
}

interface listBanWordOptions{
    start:Date;
    limit:number;
    page:number;
}

export default function buildListBanWord({banWordDb}: buildListBanWordOptions){
    return async function listBanWord({start = new Date(), limit = 10, page = 0}: listBanWordOptions): Promise<BanWordClass[]>{

        const res = await banWordDb.findAll({start, limit, page});

        let banWordArray:BanWordClass[] = [];
        for (let banWordInfo of res){
            let banWord = new BanWord(banWordInfo);
            banWordArray.push(banWord);
        }

        return banWordArray;

    }
}