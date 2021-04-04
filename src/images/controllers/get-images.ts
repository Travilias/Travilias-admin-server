import ImageClass from "@tas/images/models/ImageClass";

interface MakeGetImagesOptions {
    listImages: (options: { limit: number, page: number, start: Date, unControlled: boolean }) => Promise<ImageClass[]>;
}

export default function makeGetImages({listImages}: MakeGetImagesOptions) {
    return async function getImages(httpRequest) {
        const {limit, page, start, unControlled} = httpRequest.query;

        const options: any = {};

        if (limit) {
            const _limit = parseInt(limit);
            if (isNaN(_limit)) {
                throw Error("Bad request");
            }
            options.limit = _limit;
        }

        if (page) {
            const _page = parseInt(page);
            if (isNaN(_page)) {
                throw Error("Bad request");
            }
            options.page = _page;
        }

        if (start) {
            const _start = new Date(start);
            if (isNaN(_start.getTime())) {
                throw new Error("Bad request");
            }
            options.start = _start;
        }
        options.unControlled = !!unControlled;

        const images = await listImages(options);

        // Create return type
        const populatedImages = await Promise.all(images.map(async image => {
            const owner = await image.getOwner();
            return {
                id: image.id,
                url: image.url,
                createdAt: image.createdAt,
                pined: image.pined,
                type: image.type,
                controlDatetime: image.controlDatetime,
                claims: image.claims,
                owner
            }
        }));

        return {images: populatedImages};
    }
}