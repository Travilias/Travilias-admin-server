import makeId from "@tas/makeId";
import UserClass from "@tas/users/models/UserClass";



export default abstract class SuggestionClass {

    protected _id:string;
    protected _message:string;
    protected _user:UserClass;
    protected _date:Date;

    protected _authorId:string;

    public constructor(
        id = makeId(),
        message,
        authorId,
        date
    ) {
        this._id = id;
        this._message = message;
        this._authorId = authorId;
        this._date = date;
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

    get date():Date {
        return this._date;
    }

    abstract getAuthor();

}