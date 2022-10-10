import { Router } from "express";
import CreateCompetionController from "../controller/CompetionController/CreateCompetionController";
import DeleteCompetionController from "../controller/CompetionController/DeleteCompetionController";
import EditCompetionController from "../controller/CompetionController/EditCompetionController";
import GetAllCompetionController from "../controller/CompetionController/GetAllCompetionController";

const createCompetionController = new CreateCompetionController();
const getAllCompetionController = new GetAllCompetionController();
const editCompetionController = new EditCompetionController();
const deleteCompetionController = new DeleteCompetionController();




export const competionRouter = Router();

//Competion
competionRouter.post("/", createCompetionController.createCompetion);
competionRouter.get("/", getAllCompetionController.getAllCompetion);
competionRouter.put("/:id",editCompetionController.editCompetion);
competionRouter.delete("/:id",deleteCompetionController.deleteCompetion);



