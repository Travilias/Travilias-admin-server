import makeId from "@tas/makeId";
import UserClass from "@tas/users/models/UserClass";



export default abstract class SuggestionClass {

    protected _id:string;
    protected _message:string;
    protected _user:UserClass;
    protected _createdAt:Date;

    protected _authorId:string;

    public constructor({
        id = makeId(),
        message,
        authorId,
        createdAt
    }) {
        
        this._id = id;
        this._message = message;
        this._authorId = authorId;
        this._createdAt = createdAt;
    }

    get id():string{
        return this._id;
    }

    get message():string {
        return this._message;
    }

    get user():UserClass {
        return this._user;
    }

    get createdAt():Date {
        return this._createdAt;
    }

    abstract getAuthor();

}