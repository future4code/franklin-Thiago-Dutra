import { Request, Response } from "express";
import EditCompetionBusiness from "../../business/CompetionBusiness/EditCompetionBusiness";
import { Competion } from "../../model/Competion";

const editCompetionBusiness = new EditCompetionBusiness();

export default class EditCompetionController {
  public editCompetion = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const input: Competion = {
        status: req.body.status,
        title: req.body.title,
    }
      const response = await editCompetionBusiness.editCompetion(input, id);
      res.status(201).send(response);
    } catch (error) {
      res.send(error);
    }
  };
}
