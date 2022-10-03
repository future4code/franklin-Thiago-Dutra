import { Request, Response } from "express";
import GetAllCadPlayerCompetionBusiness from "../../business/CadPlayerCompetionBusiness/GetAllCadPlayerCompetionBusiness";

const getAllCadPlayerCompetionBusiness = new GetAllCadPlayerCompetionBusiness();

export default class GetAllCadPlayerCompetionController {
  public getAllCadPlayerCompetion = async (req: Request, res: Response) => {
    try {
      const response =
        await getAllCadPlayerCompetionBusiness.getAllCadPlayerCompetionBusiness();

      res.status(200).send(response);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  };
}
