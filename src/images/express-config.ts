import { Router } from "express";
import makeExpressCallback from "@tas/express-callback";
import {getImages, postImage, putImage} from "@tas/images/controllers";

const imageRouter = Router();

imageRouter.get('/', makeExpressCallback(getImages));
imageRouter.post('/', makeExpressCallback(postImage));
imageRouter.put('/:id', makeExpressCallback(putImage));

export default imageRouter;