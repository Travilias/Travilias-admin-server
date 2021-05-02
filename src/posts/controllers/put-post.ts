import PostClass from "@tas/posts/models/PostClass";


interface MakePostPutOptions {
    editPost: (postInfos: any) => Promise<PostClass>;
}

export default function makePutPost({editPost}: MakePostPutOptions) {
    return async function putPost(httpRequest) {
        const id = httpRequest.params.id;

        const {controlType} = httpRequest.body;
        if (!controlType) {
            throw new Error("Bad Request");
        }

        const post = await editPost({id, controlType, controlledAt: new Date()});

        await Promise.all([post.getAuthor(), post.getImages(), post.populateReports()]);

        return {post: post.toSchema()};
    }
}