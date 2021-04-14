import makeListImages from "@tas/images/use-cases/list-images";
import {imageRepository} from "@tas/images/data-access";
import makeAddImage from "@tas/images/use-cases/add-image";
import makeFindImageById from "@tas/images/use-cases/find-image-by-id";
import makeEditImage from "@tas/images/use-cases/edit-image";


const listImages = makeListImages({imageRepository});
const addImage = makeAddImage({imageRepository});
const findImageById = makeFindImageById({imageRepository});
const editImage = makeEditImage({imageRepository});

export {
    listImages,
    addImage,
    findImageById,
    editImage
}