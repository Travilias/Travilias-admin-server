import {UserInfos, UserSchema} from "@tas/users/types";

interface MakePostUserOptions {
    addUser: (userInfos: UserInfos) => Promise<UserSchema>;
}

export default function makePostUser ({addUser}: MakePostUserOptions) {
    return async function postUser(httpRequest) {
        const {...userInfos} = httpRequest.body;

        const user = await addUser({
            ...userInfos
        });

        return {user};
    }
}