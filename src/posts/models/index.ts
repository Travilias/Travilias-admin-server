import buildPost from "@tas/posts/models/Post";
import makeId from "@tas/makeId";
import {findImageById} from "@tas/images/use-cases";
import {findUser} from "@tas/users/use-cases";


function findUserById (id: string) {
    return findUser({id});
}


const Post = buildPost({makeId, findImageById, findUserById})

export {
    Post
}