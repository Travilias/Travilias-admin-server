import { Router } from "express";
import makeExpressCallback from "@tas/express-callback";
import {getPostById, getPosts, postPost, putPost} from "@tas/posts/controllers";

const postRouter = Router();

postRouter.get('/', makeExpressCallback(getPosts));
postRouter.get('/:id', makeExpressCallback(getPostById));
postRouter.post('/', makeExpressCallback(postPost));
postRouter.put('/:id', makeExpressCallback(putPost));

export default postRouter;