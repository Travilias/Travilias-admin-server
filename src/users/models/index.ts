import buildMakeUser from "./user";
import makeId from "@tas/makeId";


const User = buildMakeUser({makeId});

export {
    User
}