import ImageRepository from "@tas/images/data-access/image-db";
import {Image} from "@tas/images/models";

interface MakeListImagesOptions {
    imageRepository: ImageRepository;
}

export default function makeListImages({imageRepository}: MakeListImagesOptions) {
    return async function listImages({limit, page, start, unControlled}: {limit: number, start: Date, page: number, unControlled?: boolean}) {
        const images = await imageRepository.findAll({limit, start, page, unControlled});
        return images.map(image => new Image(image));
    }
}