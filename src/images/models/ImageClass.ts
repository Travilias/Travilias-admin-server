import {ImageType} from "@tas/images/types";
import {UserSchema} from "@tas/users/types";

/**
 * Represents an image
 */
export default abstract class ImageClass {

    protected _id: string;
    protected _url: string;
    protected _ownerId: string;
    protected _type: ImageType;
    protected _controlDatetime: Date;
    protected _claims: any[]; // TODO : Type claim
    protected _createdAt: Date;
    protected _pined: boolean;

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
    protected constructor({
                    id,
                    url,
                    ownerId,
                    type,
                    controlDatetime,
                    claims,
                    createdAt,
                    pined
                }) {
        this._id = id;
        this._url = url;
        this._ownerId = ownerId;
        this._type = type;
        this._controlDatetime = controlDatetime;
        this._claims = claims;
        this._createdAt = createdAt;
        this._pined = pined;
    }

    abstract getOwner(): Promise<UserSchema>;


    get id(): string {
        return this._id;
    }

    get url(): string {
        return this._url;
    }

    get ownerId(): string {
        return this._ownerId;
    }

    get type(): ImageType {
        return this._type;
    }

    get controlDatetime(): Date {
        return this._controlDatetime;
    }

    get claims(): any[] {
        return this._claims;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    get pined(): boolean {
        return this._pined;
    }

    pin() {
        this._pined = true;
    }

    unPin() {
        this._pined = false;
    }
}