import { ClaimDb } from "../repository";
import buildAddClaim from "./addClaim";
import buildFindClaim from "./findClaim";

const addClaim = buildAddClaim({claimDb: ClaimDb});

const findClaim = buildFindClaim({claimDb: ClaimDb});

export {
    addClaim,
    findClaim
}