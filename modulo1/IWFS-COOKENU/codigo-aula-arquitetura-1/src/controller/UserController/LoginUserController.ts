import { Request, Response } from "express";
import LoginUserBusiness from "../../business/UserBusiness/LoginUserBusiness";

const userBusiness = new LoginUserBusiness();

export default class LoginUserController {
  public login = async (req: Request, res: Response) => {
    try {
      const input: any = {
        email: req.body.email,
        password: req.body.password,
      };
      const response = await userBusiness.login(input);

      res.status(201).send(response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).send({ message: error.message });
      }

      res.status(500).send({ message: "Erro inesperado" });
    }
  };
}
