import { Request, Response } from "express";
import ListUserBusiness from "../../business/UserBusiness/ListUserBusiness";

const userBusiness = new ListUserBusiness();

export default class ListUserController {
    public listUser = async (req: Request, res: Response) => {
        try {
          const token = req.headers.authorization
          
          const response = await userBusiness.listUser(token);
    
          res.status(200).send(response);
        } catch (error) {
          return res.status(400).send({ message: error.message });
        }
      };
}
