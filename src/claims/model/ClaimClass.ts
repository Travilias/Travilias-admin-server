import makeId from "@tas/makeId";
import UserClass from "@tas/users/models/UserClass";
import { ClaimSchema } from ".";
import { ClaimType } from "../types";

export default abstract class ClaimClass {

    private _id:string;
    private _author:UserClass;
    private _message:string;
    private _type:ClaimType;

    protected constructor({id = makeId(), author, message, type}: ClaimSchema){
        this._id = id;
        this._message = message;
        this._author = author;
        this._type = type;
    }

    get id():string {
        return this._id;
    }

    get author():UserClass {
        return this._author;
    }

    get message():string {
        return this._message;
    }

    get type():ClaimType {
        return this._type;
    }

}