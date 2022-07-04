import axios from "axios"
import { goToHome } from "../../routes/coordinator"
import { BASE_URL } from "../constants/urls"




export const singUp = (body,clear,history) => {
    axios.post (`${BASE_URL}/user/signup`, body)
    .then((response) =>{
        localStorage.setItem("token", response.data.token)
        clear()
        goToHome(history);
    })
    .catch((error) =>alert(error.response.data.message))
}