import { findUser } from "@tas/users/use-cases";
import { makeReport } from "./Report";

export const Report = makeReport({findUserById: (id: string) => findUser({id})});