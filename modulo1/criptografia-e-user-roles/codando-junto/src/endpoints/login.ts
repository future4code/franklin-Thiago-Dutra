import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"

export default async function login(req: Request, res: Response) {
    try {
        const {email, password} = req.body

        const userDB = new UserDatabase()
        const user = await userDB.getByEmail(email)

        if(!user){
            throw new Error("Email ou senha incorreta")
        }
        const hashManage = new HashManager()
        const passwordCorrect: boolean = await hashManage.compare(password,user.password)
        if(!passwordCorrect){
            throw new Error("Email ou senha incorreta")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id: user.id})
        res.send({token})

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}