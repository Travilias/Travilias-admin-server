import { UserSchema} from "@tas/users/types"
import UserClass from "@tas/users/models/UserClass";

interface BuildMakeUserOptions {
    makeId: () => string;
}

/**
 * Generate the makeImage function
 * @param makeId function that returns a unique id
 */
export default function buildMakeUser({makeId}: BuildMakeUserOptions) {

    const isIdValid = (_v: any) => typeof _v === 'string';
    const isUsernameValid = (_v: any) => typeof _v === 'string';
    const isDisplayedNameValid = (_v: any) => typeof _v === 'string';
    const isEmailValid = (_v: any) => typeof _v === 'string';
    const isCreatedAtValid = (_v: Date) => !isNaN(_v.getTime());
    const isProfilePictureValid = (_v: any) => _v === null || typeof _v === 'string';

    class User extends UserClass {

        constructor({
                        id = makeId(),
                        ..._options
                    }: UserSchema) {
            super({id, ..._options});

            if (!isIdValid(this._id)) {
                throw new Error("Invalid id")
            }
            if (!isUsernameValid(this._username)) {
                throw new Error("Invalid username")
            }
            if (!isDisplayedNameValid(this._displayedName)) {
                throw new Error("Invalid displayedName")
            }
            if (!isEmailValid(this._email)) {
                throw new Error("Invalid Email")
            }
            if (!isCreatedAtValid(this._created_at)) {
                throw new Error("Invalid Created At Date")
            }
            if (!isProfilePictureValid(this.profile_picture)) {
                throw new Error("Invalid Profile Picture")
            }


        }
    }

    return User;
}