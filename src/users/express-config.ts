import { Router } from "express";
import makeExpressCallback from "@tas/express-callback";
import {getUser, postUser} from "@tas/users/controllers";

const userRouter = Router();

userRouter.get('/:id', makeExpressCallback(getUser));
userRouter.post('/', makeExpressCallback(postUser));

export default userRouter;