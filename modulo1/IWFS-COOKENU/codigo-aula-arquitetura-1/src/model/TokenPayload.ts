import { USER_ROLES } from "./USER_ROLES";

export interface ITokenPayload {
    id: string,
    role: USER_ROLES
}