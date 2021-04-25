import ResponseError from "@tas/tools/types/ResponseError";
import { Claim, ClaimRequestSchema } from "../model";
import ClaimRepository from "../repository/claimDb";

interface buildAddClaimOptions {
    claimDb:ClaimRepository
}

export default function buildAddClaim({claimDb}: buildAddClaimOptions){
    return async function addClaim({claimInfos}: {claimInfos:ClaimRequestSchema}) {
        
        if(!claimInfos){
            throw new ResponseError("data non available", 400);
        }

        const newClaim = await claimDb.insert(claimInfos);

        return new Claim(newClaim);
    }
}