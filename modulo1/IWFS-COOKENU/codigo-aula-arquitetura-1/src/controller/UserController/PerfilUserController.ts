import { Request, Response } from "express";
import CreateUserBusiness from "../../business/UserBusiness/CreateUserBusiness";
import PerfilUserBusiness from "../../business/UserBusiness/PerfilUserBusiness";

const userBusiness = new PerfilUserBusiness();

export default class PerfilUserController {
  public perfil = async (req: Request, res: Response) => {
    try {
      const {id} = req.params
      const token = req.headers.authorization as string;
      const response = await userBusiness.perfil(token,id);

      res.status(200).send(response);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  };
}
