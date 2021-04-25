import makeAddUser from "@tas/users/use-cases/add-user";
import {userRepository} from "@tas/users/data-access";
import makeFindUser from "@tas/users/use-cases/find-user";

/**
 * Create a User with the given user infos
 * @return The created user infos
 */
const addUser = makeAddUser({userRepository});

/**
 * Find a user in the database
 * @return The founded user or null
 */
const findUser = makeFindUser({userRepository});

export {
    addUser,
    findUser
}