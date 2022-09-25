import { Request, Response } from "express";
import CreateUserBusiness from "../../business/UserBusiness/CreateUserBusiness";

const userBusiness = new CreateUserBusiness();

export default class CreateUserController {
  
  public signup = async (req: Request, res: Response) => {
    try {
      const input: any = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };
      const response = await userBusiness.signup(input);

      res.status(201).send(response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).send({ message: error.message });
      }
      res.status(500).send({ message: "Erro inesperado" });
    }
  };
  
}
