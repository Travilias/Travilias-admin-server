import {findImageById} from "@tas/images/use-cases";
import makeGetPosts from "@tas/posts/controllers/get-posts";
import {addPost, findPostById, listPosts} from "@tas/posts/use-cases";
import {findUser} from "@tas/users/use-cases";
import makePostPost from "@tas/posts/controllers/post-post";
import makeGetPostById from "@tas/posts/controllers/get-post-by-id";


function findUserById(id: string) {
    return findUser({id});
}

const getPosts = makeGetPosts({listPosts, findImageById, findUserById});
const postPost = makePostPost({addPost});
const getPostById = makeGetPostById({findPostById, findImageById, findUserById});

export {
    getPosts,
    postPost,
    getPostById
}