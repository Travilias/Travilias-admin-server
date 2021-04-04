import {UserSchema} from "@tas/users/types";

interface MakeGetUserOptions {
    findUser: ({id}) => Promise<UserSchema | null>;
}

export default function makeGetUser({findUser}: MakeGetUserOptions) {
    return async function getUser(httpRequest) {
        const {id} = httpRequest.params;

        const user = findUser({id});

        if (user === null) {
            throw new Error("User not found");
        }

        return {user};
    }
}