import React from "react";
import { useNavigate } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";
import { goToApplicationForm, goToBack } from "../routes/coordinator";
import powerSlap from "../components/videos/video-1.mp4";
import {
  Button,
  ContainerP,
  HeroContainer,
  HeroContainerButton,
  VideoContainer,
} from "./style";

const ListTripsPage = () => {
  const [trips, error, isLoading] = useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/thiago/trips"
  );
  const history = useNavigate();

  return (
    <div>
      <HeroContainer>
          <VideoContainer autoPlay loop muted>
          <source src={powerSlap} />
        </VideoContainer>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>Ocorreu um erro</p>}
        {!isLoading &&
          trips &&
          trips.map((trip) => {
            return (
              <div key={trip.id}>
                <ContainerP>{trip.name}</ContainerP>
              </div>
            );
          })}
          <HeroContainerButton>
        <Button onClick={() => goToApplicationForm(history)}>
          Inscrever-se em uma viagem
        </Button>
        <Button onClick={() => goToBack(history)}>Voltar</Button>
        </HeroContainerButton>
      </HeroContainer>
    </div>
  );
};
export default ListTripsPage;
