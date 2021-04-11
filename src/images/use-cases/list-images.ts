import ImageRepository from "@tas/images/data-access/image-db";
import {Image} from "@tas/images/models";
import ImageClass from "@tas/images/models/ImageClass";

interface MakeListImagesOptions {
    imageRepository: ImageRepository;
}

export default function makeListImages({imageRepository}: MakeListImagesOptions) {
    return async function listImages({limit, page, start, unControlled}: {limit: number, start: Date, page: number, unControlled?: boolean}) {
        const imagesSchema = await imageRepository.findAll({limit, start, page, unControlled})

        let images: ImageClass[] = [];
        for (let imageSchema of imagesSchema) {
            try {
                images.push(new Image(imageSchema));
            } catch (e) {
                console.error(e);
            }
        }

        return images

    }
}