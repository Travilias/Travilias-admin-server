import buildMakeImage from "./image";
import makeId from "@tas/makeId";
import {findUser} from "@tas/users/use-cases";


const Image = buildMakeImage({makeId, findUser});

export {
    Image
}