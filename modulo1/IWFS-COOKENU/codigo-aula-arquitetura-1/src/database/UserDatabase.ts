import { IUserDB, User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { BaseDatabase } from "./BaseDatabase";
import jwt from "jsonwebtoken";


export default class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "cookenu_users";
  public static TABLE_RECIPES = "cookenu_recipes";

  public toUserDbModel = (user: User) => {
    const userDB: IUserDB = {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole(),
    };
    return userDB;
  };

  public createUser = async (user: User) => {
    const userDB = this.toUserDbModel(user);

    await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(userDB);
  };

  public findByEmail = async (email: string) => {
    const usersDB: IUserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select()
        .where({ email })

    return usersDB[0]
}

  public logUser = async (email: string) => {
    try {
      const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
        .select("*")
        .where({ email: email });

      return {
        id: result[0].id,
        name: result[0].name,
        email: result[0].email,
        password: result[0].password,
        role: result[0].role,
      };
    } catch (error: any) {
      throw new Error(error);
    }
  };
  public perfil = async (token: string,id:string) => {
    try {
      
    const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
    .select()
    .where({id : id})
    return result
    } catch (error: any) {
      return { code: 401, result: error.message };
    }
  };
  public getUsers = async () => {
    try {
      const result = await BaseDatabase.connection(
        UserDatabase.TABLE_USERS
      ).select("name", "email", "role", "id");

      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  public findById = async (id: string) => {
    const usersDB: IUserDB[] = await BaseDatabase.connection(
      UserDatabase.TABLE_USERS
    )
      .select()
      .where({ id });

    return usersDB[0];
  };
  public deleteUser = async (id: string) => {
    try {
      const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
        .delete()
        .where({ id});
      return result;
    } catch (error) {
      throw new Error("erro ao deletar");
    }
  };
}
