import { Request, Response } from "express";
import GetAllCompetionBusiness from "../../business/CompetionBusiness/GetAllCompetionBusiness";

const getAllCompetionBusiness = new GetAllCompetionBusiness();

export default class GetAllCompetionController {
  public getAllCompetion = async (req: Request, res: Response) => {
    try {
      const response = await getAllCompetionBusiness.getAllCompetionBusiness();

      res.status(200).send(response);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  };
}
