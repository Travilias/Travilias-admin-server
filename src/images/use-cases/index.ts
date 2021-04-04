import makeListImages from "@tas/images/use-cases/list-images";
import {imageRepository} from "@tas/images/data-access";
import makeAddImage from "@tas/images/use-cases/add-image";


const listImages = makeListImages({imageRepository});
const addImage = makeAddImage({imageRepository});

export {
    listImages,
    addImage
}