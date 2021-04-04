import {UserSchema} from "@tas/users/types";

export default abstract class UserClass {
    protected _username: string;
    protected _id: string;
    protected _displayedName: string;
    protected _email: string;
    protected _created_at: Date;
    protected _profile_picture: string;

    constructor({
                    id,
                    username,
                    displayedName,
                    email,
                    created_at,
                    profile_picture,
                }: UserSchema) {
        this._id = id;
        this._username = username;
        this._displayedName = displayedName;
        this._email = email;
        this._created_at = new Date(created_at);
        this._profile_picture = profile_picture;
    }


    get username(): string {
        return this._username;
    }

    get id(): string {
        return this._id;
    }

    get displayedName(): string {
        return this._displayedName;
    }

    get email(): string {
        return this._email;
    }

    get created_at(): Date {
        return this._created_at;
    }

    get profile_picture(): string {
        return this._profile_picture;
    }
}
