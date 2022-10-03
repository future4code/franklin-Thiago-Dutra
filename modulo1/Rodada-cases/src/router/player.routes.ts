import { Router } from "express";

import CreatePlayerController from "../controller/PlayerController/CreatePlayerController";
import GetAllPlayerController from "../controller/PlayerController/GetAllPlayerController";

const createPlayerController = new CreatePlayerController();
const getAllPlayerController = new GetAllPlayerController();






export const playerRouter = Router();

//Player
playerRouter.post("/", createPlayerController.createPlayer);
playerRouter.get("/", getAllPlayerController.getAllPlayer);
// playerRouter.post("/:id",editCompetionController.editCompetion);
// playerRouter.delete("/:id",deleteCompetionController.deleteCompetion);



