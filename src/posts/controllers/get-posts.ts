import PostClass from "@tas/posts/models/PostClass";

interface MakeGetPostsOptions {
    listPosts: (options: {limit: number, page: number, start: Date}) => Promise<PostClass[]>,
}

export default function makeGetPosts({listPosts}: MakeGetPostsOptions) {
    return async function getPosts(httpRequest) {
        const {limit, page, start} = httpRequest.query;

        const options: any = {};

        // Verify and add options
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
            await Promise.all([post.getAuthor(), post.getImages()]);
            return post.toSchema();
        }))

    }
}