import { Request, Response } from "express";
import { request } from "http";
import connection from "../connection";
import Autenticator from "../services/Autenticator";
import { idGenerator } from "../services/idGenerator";
import { autenticationData, user } from "../types";

export default async function login(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password } = req.body

      if (!email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      }

      const [user] = await connection('to_do_list_users')
         .where({ email })

      const autenthicator = new Autenticator()
      const payload:autenticationData ={
        id: user.id
      }
      const token = autenthicator.generateToken(payload)
      res.status(201).send({token})
   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: 'error internal' })
      }
   }
}