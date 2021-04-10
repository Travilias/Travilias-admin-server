import {Image} from '../models';

export default function makeGetImages({listImages}) {
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

        return images.map((image) => new Image(image));


    }
}