import {Db, FilterQuery} from "mongodb";
import {ImageDb, ImageSchema} from "../types";

interface MakeImageDbOptions {
    makeDb: () => Promise<Db>,
    collectionName: string,
    makeId: () => string
}

interface FindAllOptions {
    start: Date,
    limit: number,
    page: number,
    unControlled: boolean
}

/**
 * Setup the functions that interact with a mongoDb database for Images
 * @param makeDb an async function that creates a connection to a mongoDB database
 * @param collectionName Name of the mongodb collection that contains images
 * @param makeId function that generates Ids
 */
export default function makeImageDb({makeDb, collectionName, makeId}: MakeImageDbOptions) {

    return Object.freeze({
        findAll,
        insert
    })

    /**
     * Find images in the Database
     * @param start Starting date of the search (default is current Date)
     * @param limit Max number of results per search
     * @param page Number of <limit> to skip before retuning the results
     * @param unControlled boolean
     */
    async function findAll({start = new Date(), limit = 10, page = 0, unControlled = true}: FindAllOptions) {
        const db = await makeDb();
        // TODO : type db schema
        const query: FilterQuery<any> = {
            $and: [
                {created_at: {$lt: start}}
            ]
        };

        if (unControlled) {
            query.$and.push({controlDatetime: null});
        }
        const pages = await db.collection(collectionName).find(query).limit(10).skip(page * limit);

        // Map the query result
        return (await pages.toArray()).map(({_id: id, ...image}) => ({
            id,
            ...image
        }));
    }

    async function insert({id: _id = makeId(), ...imageInfos}: ImageSchema): Promise<ImageSchema> {
        const db = await makeDb();
        const result = await db.collection(collectionName).insertOne({_id, ...imageInfos});
        const {_id: id, ...insertedInfos} = result.ops[0];
        return {id, ...insertedInfos};
    }

    


}
