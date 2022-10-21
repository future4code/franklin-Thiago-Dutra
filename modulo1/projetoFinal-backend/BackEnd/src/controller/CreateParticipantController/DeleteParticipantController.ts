import { Request, Response } from "express";
import DeleteParticipantBusiness from "../../business/CreateParticipantBusiness/DeleteParticipantBusiness";

const deleteParticipantBusiness = new DeleteParticipantBusiness();

export default class DeleteParticipantController {
  public deleteParticipantController = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const response = await deleteParticipantBusiness.deleteParticipantBusiness(id);

      res.status(201).send(response);
    } catch (error) {
      res.send(error);
    }
  };
}
