import PostRepository from "@tas/posts/data-access/postDb";
import {Post} from "@tas/posts/models";


interface MakePutPostOptions {
    postRepository: PostRepository;
}

export default function makeEditPost({postRepository}: MakePutPostOptions) {
    return async function editPost({id, ...changes}) {

        const existingPost = await postRepository.findById(id);
        const post = new Post({...existingPost, ...changes});

        const updated = await postRepository.updatePost({
            id: post.id,
            title: post.title,
            content: post.content,
            authorId: post.authorId,
            imagesIds: post.imagesIds,
            location: post.location,
            createdAt: post.createdAt,
            controlType: post.controlType,
            controlledAt: post.controlledAt
        });
        return new Post(updated);
    }
}