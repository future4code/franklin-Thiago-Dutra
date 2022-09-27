import { Request, Response } from "express";
import CreateUserBusiness from "../../business/UserBusiness/CreateUserBusiness";
import DeleteUserBusiness from "../../business/UserBusiness/DeleteUserBusiness";

const userBusiness = new DeleteUserBusiness();

export default class DeleteUserController {
  public deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const response = await userBusiness.deleteUser(id);

      res.status(200).send({message:"Deletado com sucesso "});
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).send({ message: error.message });
      }

      res.status(500).send({ message: "Erro inesperado" });
    }
  };
}
