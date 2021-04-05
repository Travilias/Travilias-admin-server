import {GPSLocation, PostSchema} from "@tas/posts/types";
import {UserSchema} from "@tas/users/types";
import {ImageSchema} from "@tas/images/types";

export default abstract class PostClass {
    protected _id: string;
    protected _title: string;
    protected _content: string;
    protected _imagesIds: string[];
    protected _authorId: string;
    protected _location: GPSLocation;

    protected constructor({id, title, content, imagesIds, authorId, location}: PostSchema) {
        this._id = id;
        this._title = title;
        this._content = content;
        this._imagesIds = imagesIds;
        this._authorId = authorId;
        this._location = location;
    }

    abstract getAuthor(): Promise<UserSchema>;

    abstract getImages(): Promise<ImageSchema[]>;


    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get content(): string {
        return this._content;
    }

    get imagesIds(): string[] {
        return this._imagesIds;
    }

    get authorId(): string {
        return this._authorId;
    }

    get location(): GPSLocation {
        return this._location;
    }
}