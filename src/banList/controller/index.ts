import { addBanWord, listBanWord, removeBanWord } from "../useCase";
import buildGetBanWords from "./getBanWords";
import buildPostBanWord from "./postBanWord";
import buildDeleteBanWord from "./deleteBanWord";

const getBanWords = buildGetBanWords({listBanWord});

const postBanWord = buildPostBanWord({addBanWord});

const deleteBanWord = buildDeleteBanWord({removeBanWord});

export {
    getBanWords,
    postBanWord,
    deleteBanWord
}