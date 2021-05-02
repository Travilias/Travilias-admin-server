import UserClass from "@tas/users/models/UserClass";

export interface ReportSchema {
    message: string;
    type: string;
    createdAt: Date;
    authorId?: string;
    author?: UserClass;
}

export interface ReportInfos {
    message: string;
    type: string;
    createdAt: Date;
    authorId: string;
}