import makeImageDb from "@tas/images/data-access/image-db";
import {makeDb} from "@tas/database";
import makeId from "@tas/makeId";

const imageDb = makeImageDb({makeDb, collectionName: 'images', makeId});

export {
    imageDb
}