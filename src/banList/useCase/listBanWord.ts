import { BanWord, BanWordClass } from "../models";
import BanWordRepository from "../repositories/banWordDb";

interface buildListBanWordOptions {
    banWordDb: BanWordRepository;
}

interface listBanWordOptions{}

export default function buildListBanWord({banWordDb}: buildListBanWordOptions){
    return async function listBanWord({}: listBanWordOptions): Promise<BanWordClass[]>{

        const res = await banWordDb.findAll({});
        

        let banWordArray:BanWordClass[] = [];
        for (let banWordInfo of res){
            let banWord = new BanWord(banWordInfo);
            banWordArray.push(banWord);
        }

        return banWordArray;

    }
}