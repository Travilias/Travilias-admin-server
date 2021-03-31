import makeListImages from "@tas/images/use-cases/list-images";
import {imageDb} from "@tas/images/data-access";
import makeAddImage from "@tas/images/use-cases/add-image";


const listImages = makeListImages({imageDb});
const addImage = makeAddImage({imageDb});

const imageService = Object.freeze({
    listImages,
    addImage
})

export default imageService;
export {
    listImages,
    addImage
}