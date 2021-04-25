import makeId from "@tas/makeId";

export default abstract class AnswerClass {

    protected _id: string;
    protected _title:string;
    protected _message:string;
    protected _suggestion_id:string;
    
    public constructor({id = makeId(), title, message, suggestion_id }:{id:string, title:string, message:string, suggestion_id:string}){
        this._id = id;
        this._title = title;
        this._message = message;
        this._suggestion_id = suggestion_id;
    }

    
    public get id() : string {
        return this._id;
    }
    
    public get title() : string {
        return this._title;
    }
    
    public get message() : string {
        return this._message;
    } 
    
    public get suggestion_id() : string {
        return this._suggestion_id;
    } 
}