import ClaimClass from "../model/ClaimClass"

interface buildGetClaimOptions {
    findClaim: ({id}:{id:string}) => Promise<ClaimClass>;
}

export default function buildGetClaim({findClaim}) {
    return async function getClaim({id}: {id:string}) {

        return await findClaim({id});

    }
}