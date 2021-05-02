import UserClass from "@tas/users/models/UserClass";
import { ReportSchema } from "./types";


export default abstract class ReportClass {
    protected authorId: string;
    protected message: string;
    protected type: string;
    protected createdAt: Date;

    protected author: UserClass|null;

    constructor({authorId, message, type, createdAt}) {
        this.authorId = authorId;
        this.message = message;
        this.type = type;
        this.createdAt = createdAt;
    }

    abstract getAuthor(): Promise<UserClass>;

    abstract toSchema(): ReportSchema;
}