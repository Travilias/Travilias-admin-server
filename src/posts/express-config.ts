import { Router } from "express";
import makeExpressCallback from "@tas/express-callback";
import {getPostById, getPosts, postPost} from "@tas/posts/controllers";

const postRouter = Router();

postRouter.get('/', makeExpressCallback(getPosts));
postRouter.get('/:id', makeExpressCallback(getPostById));
postRouter.post('/', makeExpressCallback(postPost));

export default postRouter;