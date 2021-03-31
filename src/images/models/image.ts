import {Image, ImageSchema} from "@tas/images/types"

interface BuildMakeImageOptions {
    makeId: () => string;
}

/**
 * Generate the makeImage function
 * @param makeId function that returns a unique id
 */
export default function buildMakeImage({makeId}: BuildMakeImageOptions) {
    /**
     * Return true if the parameter is a valid Id
     * @param _v
     */
    const isIdValid = (_v: string) => true;

    /**
     * Return true if the parameter is a valid Id
     * @param _v
     */
    const isUrlValid = (_v: string) => true;

    /**
     * Return true if the parameter is a valid owner
     * @param _v
     */
    const isOwnerValid = (_v: string) => true;

    /**
     * Return true if the parameter is a valid type
     * @param _v
     */
    const isTypeValid = (_v: string) => true;

    /**
     * Return true if the parameter is a valid ControlDateTime
     * @param _v
     */
    const isControlDateTimeValid = (_v: string | number | null|Date) => true;

    /**
     * Return true if the parameter is a valid array of claims
     * @param _v
     */
    const areClaimsValid = (_v: any[]) => true;

    /**
     * Return true if the parameter is a valid createdAt date
     * @param _v
     */
    const isCreatedAtValid = (_v: string | number|Date) => true;

    /**
     * Return true if the parameter is a valid Pined value
     * @param _v
     */
    const isPinedValid = (_v: boolean) => true;

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
    return function makeImage({
                                  id = makeId(),
                                  url,
                                  owner,
                                  type,
                                  controlDatetime = null,
                                  claims = [],
                                  created_at = Date.now(),
                                  pined = false
                              }: ImageSchema): Image {

        // Check options validity
        if (!isIdValid(id)) {
            throw new Error("Invalid Id");
        }
        if (!isUrlValid(url)) {
            throw new Error("Invalid Url");
        }
        if (!isOwnerValid(owner)) {
            throw new Error("Invalid Owner");
        }
        if (!isTypeValid(type)) {
            throw new Error("Invalid Type");
        }
        if (!isControlDateTimeValid(controlDatetime)) {
            throw new Error("Invalid Control Date Time");
        }
        if (!areClaimsValid(claims)) {
            throw new Error("Invalid Claims");
        }
        if (!isCreatedAtValid(created_at)) {
            throw new Error("Invalid Created At date");
        }
        if (!isPinedValid(pined)) {
            throw new Error("Invalid Pined value");
        }

        return Object.freeze({
            getId: () => id,
            getUrl: () => url,
            getOwner: () => owner, // TODO : type owner
            getType: () => type,
            getControlDatetime: () => controlDatetime ? new Date(controlDatetime) : null,
            getClaims: () => claims,
            getCreatedAt: () => new Date(created_at),
            getPined: () => pined,
            pin: () => {
                pined = true;
            },
            unPin: () => {
                pined = false
            }
        });


    }
}