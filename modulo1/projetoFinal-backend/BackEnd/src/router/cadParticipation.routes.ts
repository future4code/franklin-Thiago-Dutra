import { Router } from "express";
import CreateParticipantController from "../controller/CreateParticipantController/CreateParticipantController";
import DeleteParticipantController from "../controller/CreateParticipantController/DeleteParticipantController";
import GetParticipantController from "../controller/CreateParticipantController/GetParticipantController";

export const CadPaticipant = Router();
const cadParticipant = new CreateParticipantController()
const getParticipant = new GetParticipantController()
const deleteParticipant = new DeleteParticipantController()


//Cadastrar Participant
CadPaticipant.post("/", cadParticipant.creteParticipantController);
CadPaticipant.get("/", getParticipant.getParticipantController);
CadPaticipant.delete("/:id", deleteParticipant.deleteParticipantController);

