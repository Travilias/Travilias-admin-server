import PostRepository from "@tas/posts/data-access/postDb";
import {Post} from "@tas/posts/models";

interface MakeFindPostByIdOptions {
    postRepository: PostRepository;
}

export default function makeFindPostById({postRepository}: MakeFindPostByIdOptions) {
    return async function findPostById(id: string) {
        return new Post(await postRepository.findById(id));
    }
}