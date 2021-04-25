import makeId from "@tas/makeId"; // TODO : why is there a makeId import, the point of the function definition is to make it abstract
import ResponseError from "@tas/tools/types/ResponseError";
import UserClass from "@tas/users/models/UserClass";
import { ClaimSchema } from ".";
import { ClaimType } from "../types";
import ClaimClass from "./ClaimClass";

export default function buildClaim({}){

    const isValidId = (id:string) => true;
    const isValidAuthor = (author:UserClass) => true;
    const isValidMessage = (message:string) => true;
    const isValidType = (type:ClaimType) => true;

    return class Claim extends ClaimClass {

        public constructor({id = makeId(), author, message, type}:ClaimSchema){
            super({id, author, message, type});

            if(!isValidId(id)){
                throw new ResponseError("id non valide", 400);
            }

            if(!isValidAuthor(author)){
                throw new ResponseError("author non valide", 400);
            }

            if(!isValidMessage(message)){
                throw new ResponseError("message non valide", 400);
            }

            if(!isValidType(type)){
                throw new ResponseError("type non valide", 400);
            }
        }

    }
}