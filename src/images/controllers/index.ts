import makeGetImages from "@tas/images/controllers/get-images";
import {addImage, editImage, listImages} from "@tas/images/use-cases";
import makePostImage from "@tas/images/controllers/post-image";
import makePutImage from "@tas/images/controllers/put-image";


const getImages = makeGetImages({listImages});
const postImage = makePostImage({addImage});
const putImage = makePutImage({editImage});
export {
    getImages,
    postImage,
    putImage
}