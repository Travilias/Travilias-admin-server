
export default abstract class BanWordClass{

    protected _id:string;
    protected _language:string;
    protected _word:string;
    protected _createdAt:Date;

    protected constructor({id, language, word, createdAt}: {id:string, language:string, word:string, createdAt:Date}) {
        this._id = id;
        this._language = language;
        this._word = word;
        this._createdAt = createdAt
    }

    get id(): string {
        return this._id;
    }

    get language(): string {
        return this._language;
    }

    get word(): string {
        return this._word;
    }

    get createdAt(): Date {
        return this._createdAt;
    }



}