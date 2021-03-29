
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
    owner: string; // TODO : type Id
    type: ImageType;
    controlDatetime: string|number|null;
    claims: any[]; // TODO : type claims
    created_at: string|number;
    pined: boolean;
}