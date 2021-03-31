import {ImageDb} from "@tas/images/types";


export default function makeListImages({imageDb}) {
    return async function listImages({limit, page, start, unControlled}: {limit: number, start: Date, page: number, unControlled?: boolean}) {
        return imageDb.findAll({limit, start, page, unControlled});
    }
}