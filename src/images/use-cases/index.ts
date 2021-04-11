import makeListImages from "@tas/images/use-cases/list-images";
import {imageRepository} from "@tas/images/data-access";
import makeAddImage from "@tas/images/use-cases/add-image";
import makeFindImageById from "@tas/images/use-cases/find-image-by-id";


const listImages = makeListImages({imageRepository});
const addImage = makeAddImage({imageRepository});
const findImageById = makeFindImageById({imageRepository});

export {
    listImages,
    addImage,
    findImageById
}