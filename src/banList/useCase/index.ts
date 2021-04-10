import { banWordDb } from "../repositories";
import buildAddBanWord from "./addBanword";

import buildListBanWord from "./listBanWord";
import buildRemoveBanWord from "./removeBanWord";

const addBanWord = buildAddBanWord({banWordDb});

const listBanWord = buildListBanWord({banWordDb});

const removeBanWord = buildRemoveBanWord({banWordDb});

export {
    addBanWord,
    listBanWord,
    removeBanWord
}