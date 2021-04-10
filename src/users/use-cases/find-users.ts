import UserRepository from "@tas/users/data-access/user-db";
import {UserSchema} from "@tas/users/types";


interface MakeFindUserOptions {
    userRepository: UserRepository;
}

/**
 * Create the findUser use-case
 * @param options - options passed to the use-case
 * @param options.userRepository  - UserRepository used to manage users in database
 */
export default function makeFindUser({userRepository}: MakeFindUserOptions) {
    /**
     * Get a user by its Id
     * @returns {UserSchema| null} - the founded User infos or null
     */
    return async function findUser({id}: { id: string }): Promise<UserSchema | null> {
        return userRepository.findById(id);
    }
}