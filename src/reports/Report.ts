import UserClass from "@tas/users/models/UserClass";
import ReportClass from "./ReportClass";
import { ReportSchema } from "./types";


export function makeReport({findUserById}) {
    return class Report extends ReportClass {

        constructor({authorId, message, type, createdAt = new Date()}) {
            super({authorId, message, type, createdAt})
        }


        async getAuthor(): Promise<UserClass> {
            const author = await findUserById(this.authorId);
            this.author = author;
            return author;
        }
        toSchema(): ReportSchema {
            const res: ReportSchema = {
                message: this.message,
                type: this.type,
                createdAt: this.createdAt
            }

            if (this.author) {
                res.author = this.author.toSchema();
            } else {
                res.authorId = this.authorId;
            }

            return res;
        }
        
    }
}