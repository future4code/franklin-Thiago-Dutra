import UserDatabase from "../../database/UserDatabase";

const userDatabase = new UserDatabase();

export default class DeleteUserBusiness {
  public deleteUser = async (id: string) => {
        if (!id) {
      throw new Error("parâmetro id inválido");
    }
    const usersDB = await userDatabase.findById(id);
        if(!usersDB){
          throw new Error("User Not Found")
        }
    const response = userDatabase.deleteUser(id);
    if(!response){
      throw new Error("user not found")
    }
    return response;
  };
}
