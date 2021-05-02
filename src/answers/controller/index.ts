import { addAnswer } from "../useCases";
import buildPostAnswer from "./postAnswer";


const postAnswer = buildPostAnswer({addAnswer: addAnswer});

export {
    postAnswer
}