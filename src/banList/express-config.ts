import { Router } from "express";
import makeExpressCallback from "@tas/express-callback";
import {getBanWords, postBanWord, deleteBanWord} from "@tas/banList/controller";

const banWordsRouter = Router();

banWordsRouter.get('/', makeExpressCallback(getBanWords));
banWordsRouter.post('/', makeExpressCallback(postBanWord));
banWordsRouter.delete('/:id', makeExpressCallback(deleteBanWord));

export default banWordsRouter;