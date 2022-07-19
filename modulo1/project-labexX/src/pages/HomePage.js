import React from "react";
import { goToListTrip, goToLogin } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import powerSlap from '../components/videos/video-1.mp4';
import {HeroContainer,VideoContainer,ContainerH1,HeroContainerButton,Button, ContainerP} from "./style";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeroContainer>
        <VideoContainer autoPlay loop muted>
          <source src={powerSlap} />
        </VideoContainer>
        <ContainerH1>Aventuras te Aguardam!</ContainerH1>
        <ContainerP>O que está esperando ?</ContainerP>
        <HeroContainerButton>
          <Button onClick={() => goToLogin(navigate)}>Área Admin</Button>
          <Button onClick={() => goToListTrip(navigate)}>Ver as Viagens</Button>
        </HeroContainerButton>
      </HeroContainer>
    </>
  );
};

export default HomePage;
