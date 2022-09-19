import { compare, genSalt, hash } from "bcryptjs"

export class HashManager {
    public hash = async (passowrd: string) => {
        const round = Number("12")
        const salt = await genSalt(round)
        const result = await hash(passowrd,salt)
        return result
    }
    public compare = async (passowrd:string,hash:string) => {
        const result = await compare(passowrd,hash)
        return result
    }
}