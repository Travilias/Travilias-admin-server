import {Image, ImageSchema} from "@tas/images/types"

interface BuildMakeImageOptions {
    makeId: () => string;
}

export default function buildMakeImage({makeId}: BuildMakeImageOptions) {
    const isIdValid = (_v: string) => true;
    const isUrlValid = (_v: string) => true;
    const isOwnerValid = (_v: string) => true;
    const isTypeValid = (_v: string) => true;
    const isControlDateTimeValid = (_v: string | number | null) => true;
    const areClaimsValid = (_v: any[]) => true;
    const isCreatedAtValid = (_v: string | number) => true;
    const isPinedValid = (_v: boolean) => true;

    return function makeImage({
                                  id = makeId(),
                                  url,
                                  owner,
                                  type,
                                  controlDatetime = null,
                                  claims = [],
                                  created_at = Date.now(),
                                  pined
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