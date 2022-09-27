import UserDatabase from "../../database/UserDatabase";
import { User } from "../../model/User";
import { Authenticator, ITokenPayload } from "../../services/Authenticator";
import { HashManager } from "../../services/HashManager";
import { IdGenerator } from "../../services/IdGenerator";

const userDatabase = new UserDatabase();

export default class CreateUserBusiness {
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
    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      throw new Error("Parâmetro 'email' inválido");
    }
    if (typeof password !== "string" || password.length < 6) {
      throw new Error("Parâmetro 'password' inválido");
    }

    const emailVerification = await userDatabase.findByEmail(email);

    if (emailVerification) {
      throw new Error("Email já cadastrado na base de dados");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();
    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password);
    const user = new User(id, name, email, hashPassword);

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };

    const authenticator = new Authenticator();
    const token = authenticator.generateToken(payload);
    const response = {
      message: "Cadastro realizado com sucesso",
      token
    };
    return response;
  };
}
