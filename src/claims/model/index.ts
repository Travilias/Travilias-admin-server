import UserClass from "@tas/users/models/UserClass";
import { ClaimType } from "../types";
import buildClaim from "./Claim";

interface ClaimSchema {
    id:string;
    author:UserClass;
    message:string;
    type:ClaimType;
}

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
}