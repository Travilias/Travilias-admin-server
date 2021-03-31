import {makeImage} from "@tas/images/models";
import {ImageSchema} from "@tas/images/types";


export default function makeAddImage({imageDb}) {
    return async function addImage(imageInfos: ImageSchema) {
        const image = makeImage(imageInfos);
        return imageDb.insert({
            id: image.getId(),
            url: image.getUrl(),
            owner: image.getOwner(),
            type: image.getType(),
            controlDatetime: image.getControlDatetime(),
            claims: image.getClaims(),
            created_at: image.getCreatedAt(),
            pined: image.getPined(),
        });
    }
}