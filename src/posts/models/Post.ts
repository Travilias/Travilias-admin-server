import PostClass from "@tas/posts/models/PostClass";
import {PostSchema} from "@tas/posts/types";
import {ImageSchema} from "@tas/images/types";
import {UserSchema} from "@tas/users/types";

interface BuildPostOptions {
    makeId: () => string;
    findImageById: (id: string) => Promise<ImageSchema>;
    findUserById: (id: string) => Promise<UserSchema>;
}

export default function buildPost({makeId, findImageById, findUserById}: BuildPostOptions) {

    const isIdValid = () => true;
    const isTitleValid = () => true;
    const isContentValid = () => true;
    const isAuthorIdValid = () => true;
    const isLocationValid = () => true;
    const areImagesIdsValid = () => true;

    return class Post extends PostClass {

        protected _author: UserSchema;
        protected _images: ImageSchema[];

        constructor({
                        id = makeId(),
                        imagesIds = [],
                        ...options
                    }: PostSchema) {
            super({id, imagesIds, ...options});

            if (!isIdValid) {
                throw new Error("Invalid value for id")
            }
            if (!isTitleValid) {
                throw new Error("Invalid value for title")
            }
            if (!isContentValid) {
                throw new Error("Invalid value for content")
            }
            if (!isAuthorIdValid) {
                throw new Error("Invalid value for author")
            }
            if (!isLocationValid) {
                throw new Error("Invalid value for location")
            }
            if (!areImagesIdsValid) {
                throw new Error("Invalid value for imagesIds")
            }
        }

        async getAuthor(): Promise<UserSchema> {
            if (!this._author) {
                this._author = await findUserById(this._authorId);
            }
            return this._author;
        }

        getImages(): Promise<ImageSchema[]> {
            return Promise.all(this._imagesIds.map(async image => await findImageById(image)));
        }

    }
}