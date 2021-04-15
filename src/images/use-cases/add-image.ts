import {Image} from "@tas/images/models";
import {ImageSchema} from "@tas/images/types";
import ImageRepository from "@tas/images/data-access/image-db";

interface MakeAddImageOptions {
    imageRepository: ImageRepository;
}

export default function makeAddImage({imageRepository}: MakeAddImageOptions) {
    return async function addImage(imageInfos: ImageSchema) {
        const image = new Image(imageInfos);

        return new Image(await imageRepository.insert({
            id: image.id,
            url: image.url,
            ownerId: image.ownerId,
            type: image.type,
            controlDatetime: image.controlDatetime,
            claims: image.claims,
            createdAt: image.createdAt,
            pined: image.pined,
        }));
    }
}