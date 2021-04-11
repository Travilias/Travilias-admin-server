import ImageRepository from "@tas/images/data-access/image-db";
import {Image} from "@tas/images/models";

interface MakeFindImageOptions {
    imageRepository: ImageRepository;
}

export default  function makeFindImageById({imageRepository}: MakeFindImageOptions) {
    return async function findImageById(id: string) {
        return new Image(await imageRepository.findById(id));
    }
}