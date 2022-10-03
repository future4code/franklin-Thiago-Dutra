import { Router } from "express";
import CreateCadPlayerCompetionController from "../controller/CadPlayerCompetionController/CreateCadPlayerCompetion";
import GetAllCadPlayerCompetionController from "../controller/CadPlayerCompetionController/getAllCadPlayerCompetionController";

const createPlayerController = new CreateCadPlayerCompetionController();
const getAllCadPlayerCompetionController = new GetAllCadPlayerCompetionController();

export const cadPlayerCompetionRouter = Router();
//Cadastrar player na competição
cadPlayerCompetionRouter.post( "/",createPlayerController.createCadPlayerCompetion);
cadPlayerCompetionRouter.get("/", getAllCadPlayerCompetionController.getAllCadPlayerCompetion);

