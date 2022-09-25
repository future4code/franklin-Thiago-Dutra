import UserDatabase from "../../database/UserDatabase";

const userDatabase = new UserDatabase();

export default class GetUserByIdBusiness {
    public getUserById = async (input: any) => {
        const token = input.token;
        const idToGet = input.idToGet;
    
        if (!token) {
          throw new Error("Token faltando");
        }
    
        const usersDB = await userDatabase.findById(idToGet);
        if(!usersDB){
          throw new Error("User Not Found")
        }
        const user = usersDB;
    
        const userResponse: any = {
          name: user.name,
          email: user.email,
        };
    
        return userResponse;
      };
}