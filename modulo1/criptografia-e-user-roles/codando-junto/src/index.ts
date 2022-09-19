import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import getProfile from "./endpoints/getProfile"
import { HashManager } from "./services/HashManager"

app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit', editUser)
app.get('/user/profile', getProfile)

const teste = async () => {
    const hashManage = new HashManager()
    const senha = "1234"
    const senhaTentativa = "12345"

    const hash = await hashManage.hash(senha)    
    console.log(hash);
    const senhaCorreta = await hashManage.compare(senhaTentativa,hash)
    console.log("senhacorreta",senhaCorreta);
        
}
teste()
