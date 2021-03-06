import {ControlType} from "@tas/posts/types";

export enum ImageType {
    PROFILE_PICTURE = "PROFILE_PICTURE",
    ATTACHMENT = "ATTACHMENT",
    POST_PICTURE = "POST_PICTURE",
    BOOK_COVER = "BOOK_COVER",
}

export interface Image {
    getId: () => string;
    getUrl: () => string;
    getOwner: () => any; // TODO : type User
    getType: () => ImageType;
    getControlDatetime: () => Date;
    getClaims: () => any[]; // TODO : type Claim
    getCreatedAt: () => Date;
    getPined: () => boolean;
    pin: () => void;
    unPin: () => void;
}

export interface ImageSchema {
    id: string;
    url: string;
    ownerId: string; // TODO : type Id
    type: ImageType;
    claims: any[]; // TODO : type claims
    createdAt: string|number|Date;
    pined: boolean;
    controlType: ControlType|null;
    controlledAt: Date|null
}

interface FindAllOptions {
    start: Date,
    limit: number,
    page: number,
    unControlled: boolean
}

export interface i_ImageDb {
    insert: (is:ImageSchema) => ImageSchema;
    findAll: (options: FindAllOptions) => ImageSchema[];
}

export type ImageDb = Readonly<i_ImageDb>;