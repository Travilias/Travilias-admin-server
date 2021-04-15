import UserClass from "@tas/users/models/UserClass";

interface MakeGetUserOptions {
    findUser: ({id}) => Promise<UserClass | null>;
}

export default function makeGetUser({findUser}: MakeGetUserOptions) {
    return async function getUser(httpRequest) {
        const {id} = httpRequest.params;

        const user = await findUser({id});

        if (user === null) {
            throw new Error("User not found");
        }

        return {user: user.toSchema()};
    }
}