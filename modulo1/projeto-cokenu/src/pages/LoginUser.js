import React, { useState } from "react";
import {
  InputsContainer,
  LogoImage,
  ScreenContainer,
  SignUpButtonContainer,
} from "./styled/styledLogin";
import logo from "../assets/logo.png";
import { Button, CircularProgress, TextField } from "@mui/material";
import useForm from "../components/hooks/useForm";
import { goToHome, goToSignup } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useUnProtectedpage from "../components/hooks/useUnProtectedpage";

const LoginUser = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  useUnProtectedpage();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); 

  const OnSubmitForm = (event) => {
    event.preventDefault();
    Login()
  };
  const Login = () => { 
    setIsLoading(true)
    axios.post('https://cookenu-api.herokuapp.com/user/login',form)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      clear()
      setIsLoading(false)
      goToHome(navigate)
    })
    .catch((err) => {
      console.error(err.response.data.message)
      setIsLoading(false)
    })
  }

  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <InputsContainer>
        <form onSubmit={OnSubmitForm}>
          <TextField
            id="filled-basic"
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField
            id="filled-basic"
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />
          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
            margin={"normal"}
          >
            {isLoading ? <CircularProgress color={'inherit'} size={24} /> : <>Logar</>}
          </Button>
        </form>
      </InputsContainer>
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignup(navigate)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
          margin={"normal"}
        >
          Não possui conta? Cadastre-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginUser;
