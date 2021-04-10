import PostRepository from "@tas/posts/data-access/postDb";
import {makeDb} from "@tas/database";

const collection = 'posts'

const postRepository = new PostRepository({makeDb, collection});

export {
    postRepository
}