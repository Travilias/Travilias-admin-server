import PostRepository from "@tas/posts/data-access/postDb";

interface MakeFindPostByIdOptions {
    postRepository: PostRepository;
}

export default function makeFindPostById({postRepository}: MakeFindPostByIdOptions) {
    return async function findPostById(id: string) {
        return postRepository.findById(id);
    }
}