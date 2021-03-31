import { Router } from "express";
import {imageRouter} from "@tas/images";


const apiV0Router = Router();
apiV0Router.use('/image', imageRouter);

export default apiV0Router;