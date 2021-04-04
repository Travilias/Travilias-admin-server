import makeGetUser from "@tas/users/controllers/get-user";
import makePostUser from "@tas/users/controllers/post-user";
import {addUser, findUser} from "@tas/users/use-cases";


/**
 * ## Get User controller
 *
 * Get a user by its id
 *
 * Url = '/:id'
 */
const getUser = makeGetUser({findUser});

/**
 * ## Post User controller
 *
 * Create a user with user infos
 *
 * Url = '/'
 */
const postUser = makePostUser({addUser});

export {
    getUser,
    postUser
}