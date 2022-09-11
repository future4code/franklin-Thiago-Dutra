import { Request, Response } from "express";
import connection from "../connection";
import Autenticator from "../services/Autenticator";
import { idGenerator } from "../services/idGenerator";
import { autenticationData, user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password } = req.body

      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      }

      const [user] = await connection('to_do_list_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }
      // class id generator com o método generateId
      const id: string = new idGenerator().generateId()

      const newUser: user = { id, name, nickname, email, password }

      await connection('to_do_list_users')
         .insert(newUser)
         const payload: autenticationData ={
            id: newUser.id
         }
         const token = new Autenticator().generateToken(payload)

      res.status(201).send({ token })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: 'error internal' })
      }
   }
}