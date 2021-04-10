import PostRepository from "@tas/posts/data-access/postDb";


interface MakeListPostsOptions {
    postRepository: PostRepository;
}

export default function makeListPosts({postRepository}: MakeListPostsOptions) {
    return async function listPosts({limit, page, start, unControlled}: {limit: number, start: Date, page: number, unControlled?: boolean}) {
        return await postRepository.findAll({start, limit, page});
    }
}
