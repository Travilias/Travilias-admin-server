import {makeDb} from "@tas/database";
import ImageRepository from "@tas/images/data-access/image-db";

const collectionName = 'images'

const imageRepository = new ImageRepository({makeDb, collectionName});

export {
    imageRepository
}