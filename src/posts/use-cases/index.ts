import makeFindPostById from "@tas/posts/use-cases/find-post-by-id";
import {postRepository} from "@tas/posts/data-access";
import makeAddPost from "@tas/posts/use-cases/add-post";
import makeListPosts from "@tas/posts/use-cases/list-posts";


const findPostById = makeFindPostById({postRepository});
const listPosts = makeListPosts({postRepository});
const addPost = makeAddPost({postRepository});

export {
    findPostById,
    listPosts,
    addPost
}