import PostRepository from "@tas/posts/data-access/postDb";
import {Post} from "@tas/posts/models";

interface MakeListPostsOptions {
    postRepository: PostRepository;
}

export default function makeListPosts({postRepository}: MakeListPostsOptions) {
    return async function listPosts({limit, page, start, unControlled}: {limit: number, start: Date, page: number, unControlled?: boolean}) {
        const postsSchemas =  await postRepository.findAll({start, limit, page});

        return postsSchemas.map(postSchema => new Post(postSchema));
    }
}
