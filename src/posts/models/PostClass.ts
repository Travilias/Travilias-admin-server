import {ControlType, GPSLocation, PostSchema} from "@tas/posts/types";
import {UserSchema} from "@tas/users/types";
import {ImageSchema} from "@tas/images/types";
import Schema from "@tas/Schema";
import UserClass from "@tas/users/models/UserClass";
import ImageClass from "@tas/images/models/ImageClass";

export default abstract class PostClass implements PostSchema, Schema<any> {
    protected _id: string;
    protected _title: string;
    protected _content: string;
    protected _imagesIds: string[];
    protected _authorId: string;
    protected _location: GPSLocation;
    protected _createdAt: Date;
    protected _controlType: ControlType|null;
    protected _controlledAt: Date|null;

    protected _author: UserClass|null;
    protected _images: ImageClass[]|null;

    protected constructor({id, title, content, imagesIds, authorId, location, createdAt, controlType, controlledAt}: PostSchema) {
        this._id = id;
        this._title = title;
        this._content = content;
        this._imagesIds = imagesIds;
        this._authorId = authorId;
        this._location = location;
        this._createdAt = createdAt;
        this._controlType = controlType;
        this._controlledAt = controlledAt;
    }

    abstract getAuthor(): Promise<UserSchema>;

    abstract getImages(): Promise<ImageSchema[]>;

    public control(type: ControlType) {
        this._controlType = type;
        this._controlledAt = new Date();
    }

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

    get createdAt(): Date {
        return this._createdAt;
    }

    get controlType(): ControlType | null {
        return this._controlType;
    }

    get controlledAt(): Date | null {
        return this._controlledAt;
    }

    toSchema(): any {
        const res: any = {
            id: this.id,
            title: this.title,
            content: this.content,
            authorId: this.authorId,
            imagesIds: this.imagesIds,
            location: this.location,
            createdAt: this.createdAt,
            controlType: this.controlType,
            controlledAt: this.controlledAt
        }

        if (this._author) {
            res.author = this._author.toSchema();
        } else {
            res.authorId = this.authorId;
        }

        if (this._images) {
            res.images = this._images.map(i => i.toSchema());
        } else {
            res.imagesIds = this.imagesIds;
        }

        return res;
    }
}