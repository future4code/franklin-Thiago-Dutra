import { Request, Response } from "express";
import CreateUserBusiness from "../../business/UserBusiness/CreateUserBusiness";
import GetUserByIdBusiness from "../../business/UserBusiness/GetUserByIdBusiness";

const userBusiness = new GetUserByIdBusiness();

export default class GetUserByIdController {
  
    public getUsersById = async (req: Request, res: Response) => {
        try {
            const input: any = {
                token: req.headers.authorization,
                idToGet: req.params.id
            }
    
            const response = await userBusiness.getUserById(input)

            res.status(200).send(response)
        } catch (error) {
            console.log(error)
    
            if (error instanceof Error) {
                return res.status(400).send({ message: error.message })
            }
    
            res.status(500).send({ message: "Erro inesperado" })
        }
    }
  
}
