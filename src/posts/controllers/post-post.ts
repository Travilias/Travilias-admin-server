import {PostSchema} from "@tas/posts/types";
import PostClass from "@tas/posts/models/PostClass";


interface MakePostPostOptions {
    addPost: (postInfos: PostSchema) => Promise<PostClass>;
}

export default function makePostPost({addPost}: MakePostPostOptions) {
    return async function postPost(httpRequest) {
        const {...postInfos} = httpRequest.body;

        const post = await addPost(postInfos);

        await Promise.all([
            post.getAuthor(),
            post.getImages(),
            post.populateReports()
        ])

        return {post: post.toSchema()};
    }
}