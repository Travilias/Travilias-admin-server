import { Router } from "express";
import {imageRouter} from "@tas/images";
import {userRouter} from "@tas/users";


const apiV0Router = Router();
apiV0Router.use('/image', imageRouter);
apiV0Router.use('/user', userRouter);

export default apiV0Router;