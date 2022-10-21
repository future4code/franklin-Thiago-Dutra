import { Request, Response } from "express";
import GetParticipantBusiness from "../../business/CreateParticipantBusiness/getParticipantBusiness";

const getParticipantBusiness = new GetParticipantBusiness();

export default class GetParticipantController {
  public getParticipantController = async (req: Request, res: Response) => {
    try {
      const response =
        await getParticipantBusiness.getParticipantBusiness();

      res.status(200).send(response);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  };
}
