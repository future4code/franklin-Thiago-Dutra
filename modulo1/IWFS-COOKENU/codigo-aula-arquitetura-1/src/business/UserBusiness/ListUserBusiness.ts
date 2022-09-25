import UserDatabase from "../../database/UserDatabase";
import { Authenticator } from "../../services/Authenticator";

const userDatabase = new UserDatabase();
const authenticator = new Authenticator();

export default class ListUserBusiness {
  public listUser = async (token: string) => {
    const user = authenticator.getTokenPayload(token);
    console.log(user);
    
    if (!token) {
      throw new Error("parâmetro token inválido");
    }
    const response = await userDatabase.getUsers();

    return response;
  };
}