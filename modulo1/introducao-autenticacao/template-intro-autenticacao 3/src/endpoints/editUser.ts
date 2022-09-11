import { Request, Response } from "express";
import { request } from "http";
import connection from "../connection";
import Autenticator from "../services/Autenticator";
import { autenticationData } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname } = req.body
      const token =  req.headers.authorization as string
      if (!name && !nickname) {
         res.statusCode = 422
         res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'"
         throw new Error()
      }
      if(!token) {
         res.statusCode = 422
         res.statusMessage = "Informe o token"
         throw new Error()

      }
      const authenticator = new Autenticator()
      const tokenData = authenticator.getTokenData(token) as autenticationData
      if(!tokenData){
         res.statusCode = 422
         res.statusMessage = "Informe o token"
         throw new Error()
      }

      await connection('to_do_list_users')
         .update({ name, nickname })
         .where({ id: tokenData.id })

      res.end()

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).end()
      }

      res.end()
   }
}