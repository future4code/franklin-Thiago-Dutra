import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminHomePage, goToBack } from "../routes/coordinator";
import powerSlap from "../components/videos/video-2.mp4";
import {
  HeroContainer,
  VideoContainer,
  ContainerH1,
  HeroContainerButton,
  Button,
  ContainerP,
} from "./style";
import { useProtectedPageLogin } from "./AdminHomePage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitLogin = () => {
    const body = {
      email: email,
      password: password,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login",
        body
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToAdminHomePage(history);
      });
  };
  useProtectedPageLogin();

  return (
    <div>
      <HeroContainer>
        <VideoContainer autoPlay loop muted>
          <source src={powerSlap} />
        </VideoContainer>
        <ContainerH1>Aventuras te Aguardam!</ContainerH1>
        <ContainerP>O que está esperando ?</ContainerP>
        <HeroContainerButton>
          <h1>login</h1>
          <input value={email} onChange={handleInputEmail} />
          <h1>Senha</h1>
          <input value={password} onChange={handleInputPassword} />
        </HeroContainerButton>
        <Button onClick={onSubmitLogin}>Entrar</Button>
        <Button onClick={() => goToBack(history)}>Voltar</Button>
      </HeroContainer>
    </div>
  );
};

export default Login;
