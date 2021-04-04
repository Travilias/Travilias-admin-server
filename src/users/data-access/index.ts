import UserRepository from "@tas/users/data-access/user-db";
import {makeDb} from "@tas/database";

const collection = "users";

const userRepository = new UserRepository({makeDb, collection});

export {
    userRepository
}