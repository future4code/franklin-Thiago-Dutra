import UserDatabase from "../../database/UserDatabase";
import { User } from "../../model/User";
import { Authenticator, ITokenPayload } from "../../services/Authenticator";
import { HashManager } from "../../services/HashManager";

const userDatabase = new UserDatabase();

export default class LoginUserBusiness {
   
  public login = async (input: any) => {
    const email = input.email
    const password = input.password

    if (!email || !password) {
        throw new Error("Um ou mais parâmetros faltando")
    }

    if (typeof email !== "string" || email.length < 3) {
        throw new Error("Parâmetro 'email' inválido")
    }

    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        throw new Error("Parâmetro 'email' inválido")
    }

    if (typeof password !== "string" || password.length < 3) {
        throw new Error("Parâmetro 'password' inválido")
    }

    const userDB = await userDatabase.findByEmail(email)

    if (!userDB) {
        throw new Error("E-mail não cadastrado")
    }

    const user = new User(
        userDB.id,
        userDB.name,
        userDB.email,
        userDB.password,
        userDB.role
    )
    const hashManager = new HashManager();
    const isPasswordCorrect = await hashManager.compare(password, user.getPassword())

    if (!isPasswordCorrect) {
        throw new Error("Senha incorreta")
    }

    const payload: ITokenPayload = {
        id: user.getId(),
        role: user.getRole()
    }
    const authenticator = new Authenticator()
    const token = authenticator.generateToken(payload)

    const response = {
        message: "Login realizado com sucesso",
        token
    }

    return response
}
}