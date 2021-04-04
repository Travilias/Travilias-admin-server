import {ImageSchema} from "@tas/images/types"
import ImageClass from "@tas/images/models/ImageClass";
import {UserSchema} from "@tas/users/types";

interface BuildMakeImageOptions {
    makeId: () => string;
    findUser: (options: { id: string }) => Promise<UserSchema>;
}

/**
 * Generate the makeImage function
 * @param {Object} options
 * @param {function} options.makeId function that returns a unique id
 * @param {function} options.findUser function that returns a promise that resolve in a user
 */
export default function buildMakeImage({makeId, findUser}: BuildMakeImageOptions) {

    /**
     * Return true if the parameter is a valid Id
     * @param _v
     */
    const isIdValid = (_v: string) => typeof _v == "string";

    /**
     * Return true if the parameter is a valid Id
     * @param _v
     */
    const isUrlValid = (_v: string) => {
        const urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;
        return _v !== null && urlRegex.test(_v);
    };

    /**
     * Return true if the parameter is a valid owner
     * @param _v
     */
    const isOwnerIdValid = (_v: string) => _v !== null && typeof _v == "string";

    /**
     * Return true if the parameter is a valid type
     * @param _v
     */
    const isTypeValid = (_v: string) =>
        ["PROFILE_PICTURE", "ATTACHMENT", "POST_PICTURE", "BOOK_COVER"].indexOf(_v) !== -1;


    /**
     * Return true if the parameter is a valid ControlDateTime
     * @param _v
     */
    const isControlDateTimeValid = (_v: string | number | null | Date) => {
        const date = new Date(_v);
        return !isNaN(date.getTime());
    };

    /**
     * Return true if the parameter is a valid array of claims
     * @param _v
     */
    const areClaimsValid = (_v: any[]) => true;

    /**
     * Return true if the parameter is a valid createdAt date
     * @param _v
     */
    const isCreatedAtValid = (_v: Date) => {
        return !isNaN(_v.getTime());
    };

    /**
     * Return true if the parameter is a valid Pined value
     * @param _v
     */
    const isPinedValid = (_v: boolean) => typeof _v == "boolean";

    /**
     * Create an image
     *
     * <b>Mandatory :</b>
     * - url : url of the image
     * - owner : id of the image owner
     * - type : type of the image {@link ImageType}
     *
     * <b>Optional:</b>
     * - id : Image id (generate it if not provided)
     * - image : controlDatetime (default = null)
     * - claims : list of claims (default = [])
     * - pined : true if the image is pined (default = false)
     */
    return class Image extends ImageClass {

        protected _owner: UserSchema;

        constructor({
                        id = makeId(),
                        createdAt = new Date(),
                        claims = [],
                        pined = false,
                        ..._options
                    }: ImageSchema) {
            super({id, createdAt, claims, pined, ..._options});

            if (!isIdValid(this._id)) {
                throw  new Error("Invalid value for Id")
            }
            if (!isUrlValid(this._url)) {
                throw  new Error("Invalid value for Url")
            }
            if (!isOwnerIdValid(this._ownerId)) {
                throw  new Error("Invalid value for Owner")
            }
            if (!isTypeValid(this._type)) {
                throw  new Error("Invalid value for Type")
            }
            if (!isControlDateTimeValid(this._controlDatetime)) {
                throw  new Error("Invalid value for controlDateTime")
            }
            if (!areClaimsValid(this._claims)) {
                throw  new Error("Invalid value for claims")
            }
            if (!isCreatedAtValid(this._createdAt)) {
                throw  new Error("Invalid value for createdAt")
            }
            if (!isPinedValid(this.pined)) {
                throw  new Error("Invalid value for pined")
            }
        }

        async getOwner(): Promise<UserSchema> {
            if (!this._owner) {
                this._owner = await findUser({id: this._ownerId});
            }
            return this._owner;
        }
    }

}
