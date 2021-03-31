export default function makeGetImages({listImages}) {
    return async function getImages(httpRequest) {
        const {limit, page, start, unControlled} = httpRequest.query;

        return await listImages({
            limit,
            page,
            start,
            unControlled
        });
    }
}