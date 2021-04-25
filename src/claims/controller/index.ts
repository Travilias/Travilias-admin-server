import { addClaim, findClaim } from "../useCase";
import buildGetClaim from "./getClaim";
import buildPostClaim from "./postClaim";

const postClaim = buildPostClaim({addClaim: addClaim});

const getClaim = buildGetClaim({findClaim: findClaim});

export {
    getClaim,
    postClaim
}