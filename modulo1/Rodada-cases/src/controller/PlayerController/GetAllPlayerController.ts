import { Request, Response } from "express";
import GetAllCompetionBusiness from "../../business/CompetionBusiness/GetAllCompetionBusiness";
import GetAllPlayerBusiness from "../../business/PlayerBusiness/GetAllPlayerBusiness";

const getAllPlayerBusiness = new GetAllPlayerBusiness();

export default class GetAllPlayerController {
  public getAllPlayer = async (req: Request, res: Response) => {
    try {
      const response = await getAllPlayerBusiness.getAllPlayerBusiness();

      res.status(200).send(response);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  };
}
