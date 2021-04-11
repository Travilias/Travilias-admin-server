export default function makePostImage ({addImage}) {
    return async function postImage(httpRequest) {
        const {...imageInfos} = httpRequest.body;

        const image = await addImage({
            ...imageInfos
        });

        return {image: image.toSchema()};
    }
}