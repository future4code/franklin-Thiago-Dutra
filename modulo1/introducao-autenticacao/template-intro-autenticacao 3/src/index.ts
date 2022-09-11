import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { idGenerator } from "./services/idGenerator"
import autenticator from "./services/Autenticator"
import { autenticationData } from "./types"
import Aautenticator from "./services/Autenticator"
import Autenticator from "./services/Autenticator"
import login from "./endpoints/login"


const Autenticator1 = new Autenticator()
const payload: autenticationData ={
    id:"id-bananinha"
}
console.log(Autenticator1.generateToken(payload)
);

app.post('/user/login', login)
app.post('/user/signup', createUser)
app.put('/user/edit/', editUser)