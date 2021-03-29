import {Db, FilterQuery} from "mongodb";

interface MakeImageDbOptions {
    makeDb: () => Db,
    collectionName: string
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
 */
export default function makeImageDb({makeDb, collectionName}: MakeImageDbOptions) {

    return Object.freeze({
        findAll
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


}
