import {ImageSchema, ImageType} from "@tas/images/types";
import Schema from "@tas/Schema";
import UserClass from "@tas/users/models/UserClass";
import {ControlType} from "@tas/posts/types";

/**
 * Represents an image
 */
export default abstract class ImageClass implements ImageSchema, Schema<any>{

    protected _id: string;
    protected _url: string;
    protected _ownerId: string;
    protected _type: ImageType;
    protected _claims: any[]; // TODO : Type claim
    protected _createdAt: Date;
    protected _pined: boolean;
    protected _controlType: ControlType|null;
    protected _controlledAt: Date|null;

    protected _owner: UserClass|null;

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
                    claims,
                    createdAt,
                    pined,
                    controlType,
                    controlledAt
                }) {
        this._id = id;
        this._url = url;
        this._ownerId = ownerId;
        this._type = type;
        this._claims = claims;
        this._createdAt = createdAt;
        this._pined = pined;
        this._controlType = controlType;
        this._controlledAt = controlledAt;
    }

    abstract getOwner(): Promise<UserClass>;


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

    get claims(): any[] {
        return this._claims;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    get pined(): boolean {
        return this._pined;
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
            url: this.url,
            type: this.type,
            claims: this.claims,
            createdAt: this.createdAt,
            pined: this.pined,
            controlType: this.controlType,
            controlledAt: this.controlledAt
        }

        if (this._owner) {
            res.owner = this._owner.toSchema();
        } else {
            res.ownerId = this._ownerId;
        }

        return res;
    }
}