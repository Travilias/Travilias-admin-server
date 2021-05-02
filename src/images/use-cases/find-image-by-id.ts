import ImageRepository from "@tas/images/data-access/image-db";
import {Image} from "@tas/images/models";

interface MakeFindImageOptions {
    imageRepository: ImageRepository;
}

export default  function makeFindImageById({imageRepository}: MakeFindImageOptions) {
    return async function findImageById(id: string) {
        const image = await imageRepository.findById(id)
        if (!image) return null;
        return new Image(image);
    }
}