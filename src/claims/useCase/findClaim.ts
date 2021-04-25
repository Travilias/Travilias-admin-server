import ResponseError from "@tas/tools/types/ResponseError"
import { Claim } from "../model";
import ClaimRepository from "../repository/claimDb";

interface buildFindClaimOptions {
    claimDb:ClaimRepository
}

export default function buildFindClaim({claimDb}: buildFindClaimOptions) {
    return async function findClaim({id}: {id:string}) {

        if(!id){
            throw new ResponseError("id anavailable", 400);
        }

        const claim = await claimDb.findById(id);

        return new Claim(claim);

    }
}