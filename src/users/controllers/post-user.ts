import {UserInfos} from "@tas/users/types";
import UserClass from "@tas/users/models/UserClass";

interface MakePostUserOptions {
    addUser: (userInfos: UserInfos) => Promise<UserClass>;
}

export default function makePostUser ({addUser}: MakePostUserOptions) {
    return async function postUser(httpRequest) {
        const {...userInfos} = httpRequest.body;

        const user = await addUser({
            ...userInfos
        });

        return {user: user.toSchema()};
    }
}