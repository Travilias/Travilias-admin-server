import PostClass from "@tas/posts/models/PostClass";

interface MakeGetPostByIdOptions {
    findPostById: (id: string) => Promise<PostClass>,
}

export default function makeGetPostById({findPostById}: MakeGetPostByIdOptions) {
    return async function getPostById(httpRequest) {
        const {id} = httpRequest.params;

        // find the post
        const post = await findPostById(id);

        // If the post has not been found throw an error
        if (!post) {
            throw Error("Post not found");
        }

        // Populate the post
        await Promise.all([
            post.getAuthor(),
            post.getImages()
        ]);

        // return the post
        return {post: post.toSchema()};

    }
}