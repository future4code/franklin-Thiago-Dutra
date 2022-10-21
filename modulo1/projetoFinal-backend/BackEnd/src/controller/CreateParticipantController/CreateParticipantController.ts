import { Request, Response } from "express";
import CreateParticipantBusiness from "../../business/CreateParticipantBusiness/CreateParticipantBusiness";
import { CadParticipant } from "../../model/CadParticipant";

const cadParticipant = new CreateParticipantBusiness()
export default class CreateParticipantController {
  public creteParticipantController = async (req: Request, res: Response) => {
    
    try {
      const input: CadParticipant = {
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        participation: req.body.participation,
      };
      console.log(input);
      
      const response =
        await cadParticipant.createParticipantBusiness(input);
      res.status(201).send(response);

    } catch (error) {
      res.send(error);
    }
  };
}
