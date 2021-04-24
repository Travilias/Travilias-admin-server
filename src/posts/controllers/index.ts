import makeGetPostById from "@tas/posts/controllers/get-post-by-id";
import makeGetPosts from "@tas/posts/controllers/get-posts";
import makePostPost from "@tas/posts/controllers/post-post";
import makePutPost from "@tas/posts/controllers/put-post";
import { addPost, editPost, findPostById, listPosts } from "@tas/posts/use-cases";


const getPosts = makeGetPosts({listPosts});
const postPost = makePostPost({addPost});
const getPostById = makeGetPostById({findPostById});
const putPost = makePutPost({editPost});

export {
    getPosts,
    postPost,
    getPostById,
    putPost
};
