import { ClaimRequestSchema } from "../model";
import ClaimClass from "../model/ClaimClass";

interface buildPostClaimOptions {
    addClaim: ({claimInfos}:{claimInfos:ClaimRequestSchema}) => Promise<ClaimClass>;
}

export default function buildPostClaim({addClaim}: buildPostClaimOptions) {
    return async function postClaim({httpRequest}: {httpRequest}) {
        const {id, author_id, message, type} = httpRequest.query;

        return await addClaim({claimInfos: {author_id, message, type}});
    }
}