import UserDatabase from "../../database/UserDatabase";

const userDatabase = new UserDatabase();

export default class PerfilUserBusiness {
    public perfil = async (token: string,id:string) => {
        if (!token) {
          throw new Error("parâmetro token inválido");
        }
        const usersDB = await userDatabase.findById(id);
        if(!usersDB){
          throw new Error("User Not Found")
        }
        const response = userDatabase.perfil(token,id);
    
        return response;
      };
}