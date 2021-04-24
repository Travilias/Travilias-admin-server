import { Router } from "express";
import makeExpressCallback from "@tas/express-callback";
import { getSuggestionController, listSuggestionController, postSuggestionController } from "./controller";

const suggRouter = Router();

suggRouter.get('/', makeExpressCallback(listSuggestionController));
suggRouter.get('/:id', makeExpressCallback(getSuggestionController));
suggRouter.post('/', makeExpressCallback(postSuggestionController));

export default suggRouter;