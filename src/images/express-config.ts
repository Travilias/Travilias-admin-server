import { Router } from "express";
import makeExpressCallback from "@tas/express-callback";
import {getImages, postImage} from "@tas/images/controllers";

const imageRouter = Router();

imageRouter.get('/', makeExpressCallback(getImages));
imageRouter.post('/', makeExpressCallback(postImage));

export default imageRouter;