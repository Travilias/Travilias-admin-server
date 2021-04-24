import { Router } from "express";
import {imageRouter} from "@tas/images";
import {userRouter} from "@tas/users";
import postRouter from "@tas/posts/express-config";
import { suggRouter } from "@tas/suggestion";
import { MongoClient } from "mongodb";


const apiV0Router = Router();
apiV0Router.use('/image', imageRouter);
apiV0Router.use('/user', userRouter);
apiV0Router.use('/post', postRouter);
apiV0Router.use('/suggestion', suggRouter);

export default apiV0Router;