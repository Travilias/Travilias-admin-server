import PostRepository from "@tas/posts/data-access/postDb";
import {PostSchema} from "@tas/posts/types";
import {Post} from "@tas/posts/models";


interface MakeAddPostOptions {
    postRepository: PostRepository;
}

export default function makeAddPost({postRepository}: MakeAddPostOptions) {
    return async function addPost(postInfos: PostSchema) {
        const post = new Post(postInfos);

        return await postRepository.insert({
            id: post.id,
            title: post.title,
            content: post.content,
            authorId: post.authorId,
            imagesIds: post.imagesIds,
            location: post.location,
            createdAt: post.createdAt,
        });
    }
}