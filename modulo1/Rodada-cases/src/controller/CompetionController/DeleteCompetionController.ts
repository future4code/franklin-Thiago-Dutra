import { Request, Response } from "express";
import DeleteCompetionBusiness from "../../business/CompetionBusiness/DeleteCompetionBusiness";

const deleteCompetionBusiness = new DeleteCompetionBusiness();

export default class DeleteCompetionController {
  public deleteCompetion = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const response = await deleteCompetionBusiness.deleteCompetion(id);

      res.status(201).send(response);
    } catch (error) {
      res.send(error);
    }
  };
}
