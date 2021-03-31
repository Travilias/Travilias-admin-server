import makeGetImages from "@tas/images/controllers/get-images";
import {addImage, listImages} from "@tas/images/use-cases";
import makePostImage from "@tas/images/controllers/post-image";


const getImages = makeGetImages({listImages});
const postImage = makePostImage({addImage});

export {
    getImages,
    postImage
}