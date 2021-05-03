import ImageRepository from "@tas/images/data-access/image-db";
import {Image} from "@tas/images/models";


interface MakeEditImageOptions {
    imageRepository: ImageRepository;
}

export default function makeEditImage({imageRepository}: MakeEditImageOptions) {
    return async function editImage({id, ...changes}) {
        const existingImage = await imageRepository.findById(id);
        const image = new Image({...existingImage, ...changes});

        const updated = await imageRepository.saveImage({
            id: image.id,
            url: image.url,
            claims: image.claims,
            pined: image.pined,
            type: image.type,
            createdAt: image.createdAt,
            ownerId: image.ownerId,
            controlledAt: image.controlledAt,
            controlType: image.controlType
        });

        return new Image(updated);

    }
}