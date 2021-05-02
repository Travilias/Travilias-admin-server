import { ObjectId } from "bson";
import { BanWord, BanWordClass } from "../models";
import BanWordRepository from "../repositories/banWordDb";

interface buildRemoveBanWordOptions {
    banWordDb: BanWordRepository;
}

interface removeBanWordOptions{
    id:string
}

export default function buildRemoveBanWord({banWordDb}: buildRemoveBanWordOptions){
    return async function removeBanWord({id: id}: removeBanWordOptions): Promise<BanWordClass[]>{

        const res = await banWordDb.delete({id: id});

        let banWordArray:BanWordClass[] = [];
        for (let banWordInfo of res){
            let banWord = new BanWord(banWordInfo);
            banWordArray.push(banWord);
        }

        return banWordArray;

    }
}