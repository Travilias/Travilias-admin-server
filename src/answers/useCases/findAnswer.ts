import { Answer } from "../model";
import AnswerClass from "../model/AnswerClass";
import AnswerRepository from "../repository/answerRepository";

interface buildFindAnswerOptions {

    answerDb: AnswerRepository

}

export default function buildFindAnswer({answerDb}: buildFindAnswerOptions){

    return async function findAnswer({id}: {id:string}):Promise<AnswerClass>{

        const answerInfos = await answerDb.findById({id});

        const answer = new Answer({...answerInfos});

        return answer;

    }

}