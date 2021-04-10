import {PostDocument, PostSchema} from "@tas/posts/types";
import {MongoRepository} from "@tas/database/Repository";
import {FilterQuery} from "mongodb";


export default class PostRepository extends MongoRepository {

    async insert({id: _id, ...postInfos}: PostSchema): Promise<PostSchema> {
        const db = await this.makeDb();
        const result = await db.collection<PostDocument>(this.collection).insertOne({_id, ...postInfos});
        const {_id: id, ...insertedInfos} = result.ops[0];
        return {id, ...insertedInfos};
    }

    async findById(id: string): Promise<PostSchema | null> {
        const db = await this.makeDb();
        const post = await db.collection<PostDocument>(this.collection).findOne({_id: id});
        if (!post) return null;
        const {_id, ...postInfos} = post;
        return {id, ...postInfos};
    }

    async findAll({start = new Date(), limit = 10, page = 0}): Promise<PostSchema[]> {
        const db = await this.makeDb();

        const query: FilterQuery<PostDocument> = {
            $and: [
                {createdAt: {$lte: start}}
            ]
        };
        const posts = await db
            .collection<PostDocument>(this.collection)
            .find(query).limit(limit)
            .skip(page * limit)
            .toArray();

        return posts.map(({_id: id, ...post}) => ({
            id,
            ...post
        }));

    }
}