import { Router } from "express"
import CreateUserController from "../controller/UserController/CreateUserController"
import DeleteUserController from "../controller/UserController/DeleteUserController"
import GetUserByIdController from "../controller/UserController/GetUserByIdController"
import ListUserController from "../controller/UserController/ListUsersController"
import LoginUserController from "../controller/UserController/LoginUserController"
import PerfilUserController from "../controller/UserController/PerfilUserController"

const createUserController = new CreateUserController()
const loginUserController = new LoginUserController()
const perfilUserController = new PerfilUserController()
const listUserController = new ListUserController()
const getUserByIdController = new GetUserByIdController()
const deleteUserController = new DeleteUserController()



export const userRouter = Router()
// User Rotas
userRouter.get("/perfil/:id",perfilUserController.perfil)
userRouter.post("/signup",createUserController.signup)
userRouter.post("/login", loginUserController.login)
userRouter.get("/allusers", listUserController.listUser)
userRouter.get("/:id", getUserByIdController.getUsersById)
userRouter.delete("/:id", deleteUserController.deleteUser)

