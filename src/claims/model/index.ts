import UserClass from "@tas/users/models/UserClass";
import { ClaimType } from "../types";
import buildClaim from "./Claim";
// TODO : should not be defined here !
interface ClaimSchema {
    id:string;
    author:UserClass;
    message:string;
    type:ClaimType;
}
// TODO : should not be defined here !
interface ClaimRequestSchema {
    id?:number
    author_id:string;
    message:string;
    type:ClaimType;
}

const Claim = buildClaim({});

export {
    ClaimSchema,
    ClaimRequestSchema,
    Claim
};
