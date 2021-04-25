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

        return await Promise.all((await listImages(options)).map((async image => {
            await image.getOwner();
            return image.toSchema();
        })));



    }
}