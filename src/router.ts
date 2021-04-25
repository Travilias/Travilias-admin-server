import { Router } from "express";
import {imageRouter} from "@tas/images";
import {userRouter} from "@tas/users";
import banWordsRouter from "./banList";


const apiV0Router = Router();
apiV0Router.use('/image', imageRouter);
apiV0Router.use('/user', userRouter);
apiV0Router.use('/banword', banWordsRouter);

export default apiV0Router;