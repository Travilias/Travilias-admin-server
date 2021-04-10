import {PostSchema} from "@tas/posts/types";
import {UserSchema} from "@tas/users/types";
import {ImageSchema} from "@tas/images/types";

interface MakeGetPostByIdOptions {
    findPostById: (id: string) => Promise<PostSchema>,
    findUserById: (id: string) => Promise<UserSchema>,
    findImageById: (id: string) => Promise<ImageSchema>,
}

export default function makeGetPostById({findPostById, findUserById, findImageById}: MakeGetPostByIdOptions) {
    return async function getPostById(httpRequest) {
        const {id} = httpRequest.params;

        const postInfos = await findPostById(id);

        if (!postInfos) {
            throw Error("Post not found");
        }

        // Populate and return the post

        // Populate Author
        const author = await findUserById(postInfos.authorId);

        // Populate images
        const images = await Promise.all(postInfos.imagesIds.map(imageId => findImageById(imageId)));

        const post = {
            id: postInfos.id,
            title: postInfos.title,
            content: postInfos.content,
            location: postInfos.location,
            author,
            images
        };

        return {post};

    }
}