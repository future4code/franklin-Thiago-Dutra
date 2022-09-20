import { compare } from "bcryptjs";
import UserDatabase from "../database/UserDatabase";
import { User } from "../model/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

const userDatabase = new UserDatabase();
const authenticator = new Authenticator();

export default class UserBusiness {
  public signup = async (input: any) => {
    const name = input.name;
    const email = input.email;
    const password = input.password;

    if (!name || typeof name !== "string") {
      throw new Error("Parâmetro name inválido");
    }

    if (!email || typeof email !== "string") {
      throw new Error("Parâmentro name inválido");
    }
    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();
    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password);

    const user = new User(id, name, email, hashPassword);
    const userDatabase = new UserDatabase();
    await userDatabase.createUser(user);

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };

    const authenticator = new Authenticator();
    const token = authenticator.generateToken(payload);
    const response = {
      token,
    };
    return response;
  };
  public login = async (input: any) => {
    const email = input.email;
    const password = input.password;

    if (!email || !password) {
      throw new Error("email ou senha inválidos");
    }
    const userDatabase = new UserDatabase();
    const user = userDatabase.logUser(email);

    if (!user) {
      throw new Error("o usuario não existe");
    }
    const hashManager = new HashManager();
    const validationPassword: boolean = await hashManager.compare(
      password,
      (
        await user
      ).password
    );

    if (!validationPassword) {
      throw new Error("senha invalida");
    }
    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: (await user).id,
      role: (await user).role,
    });

    return token;
  };
  public listUser = async (token: string) => {
    if (!token) {
      throw new Error("parâmetro token inválido");
    }
    const response = userDatabase.getUsers();

    return response;
  };
  public deleteUser = async (input: any) => {
    const token = input.token;
    const id = input.id;
    const user = authenticator.getTokenPayload(token);

    if (!token) {
      throw new Error("parâmetro token inválido");
    }
    if (!id) {
      throw new Error("parâmetro id inválido");
    }
    if (user.role !== "ADMIN") {
      throw new Error("Sem permissão para alterar o resgistro");
    }
    const response = userDatabase.deleteUser(id);
    return response;
  };
}
