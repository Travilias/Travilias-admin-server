import {Db, FilterQuery} from "mongodb";
import {ImageSchema} from "../types";

interface ImageRepositoryOptions {
    makeDb: () => Promise<Db>,
    collectionName: string
}

interface FindAllOptions {
    start: Date,
    limit: number,
    page: number,
    unControlled: boolean
}

export default class ImageRepository {
    protected makeDb: () => Promise<Db>;
    protected collectionName: string;


    constructor(options: ImageRepositoryOptions) {
        this.makeDb = options.makeDb;
        this.collectionName = options.collectionName;
    }

    /**
     * Find images in the Database
     * @param start Starting date of the search (default is current Date)
     * @param limit Max number of results per search
     * @param page Number of <limit> to skip before retuning the results
     * @param unControlled boolean
     */
    async findAll({start = new Date(), limit = 10, page = 0, unControlled = true}: FindAllOptions) {
        const db = await this.makeDb();
        // TODO : type db schema
        const query: FilterQuery<any> = {
            $and: [
                {createdAt: {$lt: start}}
            ]
        };

        if (unControlled) {
            query.$and.push({controlDatetime: null});
        }
        const pages = await db.collection(this.collectionName).find(query).limit(limit).skip(page * limit);

        // Map the query result
        return (await pages.toArray()).map(({_id: id, ...image}) => ({
            id,
            ...image
        }));
    }

    async insert({id: _id, ...imageInfos}: ImageSchema): Promise<ImageSchema> {
        const db = await this.makeDb();
        const result = await db.collection(this.collectionName).insertOne({_id, ...imageInfos});
        const {_id: id, ...insertedInfos} = result.ops[0];
        return {id, ...insertedInfos};
    }

    async findById(id: string): Promise<ImageSchema | null> {
        const db = await this.makeDb();
        const query = db.collection(this.collectionName).find({_id: id})
        const response = await query.toArray();
        if (response.length === 0) return null;

        return {id: response[0]._id, ...response[0]};

    }

}
