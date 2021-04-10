import {PostSchema} from "@tas/posts/types";
import {UserSchema} from "@tas/users/types";
import {ImageSchema} from "@tas/images/types";

interface MakeGetPostsOptions {
    listPosts: (options: {limit: number, page: number, start: Date}) => Promise<PostSchema[]>,
    findUserById: (id: string) => Promise<UserSchema>,
    findImageById: (id: string) => Promise<ImageSchema>,
}

export default function makeGetPosts({listPosts, findUserById, findImageById}: MakeGetPostsOptions) {
    return async function getPosts(httpRequest) {
        const {limit, page, start} = httpRequest.query;

        const options: any = {};

        if (limit) {
            const _limit = parseInt(limit);
            if (isNaN(_limit)) {
                throw Error("Bad request");
            }
            options.limit = _limit;
        }

        if (page) {
            const _page = parseInt(page);
            if (isNaN(_page)) {
                throw Error("Bad request");
            }
            options.page = _page;
        }

        if (start) {
            const _start = new Date(start);
            if (isNaN(_start.getTime())) {
                throw new Error("Bad request");
            }
            options.start = _start;
        }

        const posts = await listPosts(options);

        // Populate and return posts
        return await Promise.all(posts.map(async post => {
            // Populate Author
            const author = await findUserById(post.authorId);

            // Populate images
            const images = await Promise.all(post.imagesIds.map(imageId => findImageById(imageId)));

            return {
                id: post.id,
                title: post.title,
                content: post.content,
                location: post.location,
                author,
                images
            }
        }))

    }
}