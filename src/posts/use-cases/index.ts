import makeFindPostById from "@tas/posts/use-cases/find-post-by-id";
import {postRepository} from "@tas/posts/data-access";
import makeAddPost from "@tas/posts/use-cases/add-post";
import makeListPosts from "@tas/posts/use-cases/list-posts";
import makeEditPost from "@tas/posts/use-cases/edit-post";


const findPostById = makeFindPostById({postRepository});
const listPosts = makeListPosts({postRepository});
const addPost = makeAddPost({postRepository});
const editPost = makeEditPost({postRepository});

export {
    findPostById,
    listPosts,
    addPost,
    editPost
}