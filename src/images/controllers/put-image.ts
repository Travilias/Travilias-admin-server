import ImageClass from "@tas/images/models/ImageClass";
import ResponseError from "@tas/tools/types/ResponseError";


interface MakePutImageOptions {
    editImage: (imageInfos: any) => Promise<ImageClass>;
}

export default function makePutImage({editImage}: MakePutImageOptions) {
    return async function putImage(httpRequest) {
        const id = httpRequest.params.id;

        const {controlType} = httpRequest.body;

        if (!controlType) {
            throw new ResponseError("Bad Request", 400);
        }

        const image = await editImage({id, controlType, controlledAt: new Date()});

        await Promise.all([image.getOwner()]);

        return {image: image.toSchema()};
    }
}