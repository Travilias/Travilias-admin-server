import {PostSchema} from "@tas/posts/types";


interface MakePostPostOptions {
    addPost: (postInfos: PostSchema) => Promise<PostSchema>;
}

export default function makePostPost({addPost}: MakePostPostOptions) {
    return async function postPost(httpRequest) {
        const {...postInfos} = httpRequest.body;

        const post = await addPost(postInfos);

        return {post};
    }
}