import makeExpressCallback from "@tas/express-callback";
import { Router } from "express";
import { postAnswer } from "./controller";

const answerRouter = Router();

answerRouter.post('/', makeExpressCallback(postAnswer));

export default answerRouter;