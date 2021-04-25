import {User} from "@tas/users/models";
import {UserSchema} from "@tas/users/types";
import UserRepository from "@tas/users/data-access/user-db";


interface MakeAddUserOptions {
    userRepository: UserRepository
}

export default function makeAddUser({userRepository}: MakeAddUserOptions) {
    return async function addUser(userInfos: UserSchema) {
        const user = new User(userInfos);
        return new User(await userRepository.insert({
            id: user.id,
            username: user.username,
            email: user.email,
            displayedName: user.displayedName,
            created_at: user.created_at,
            profile_picture: user.profile_picture,
        }));
    }
}