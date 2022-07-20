import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useRequestData from "../hooks/useRequestData";
import {
  goToAdminHomePage,
  goToCreateTrip,
  goToHome,
  goToLogin,
  goToTripDetails,
} from "../routes/coordinator";
import {
  Button2,
  Button3,
  DivInput,
  HeroContainerButton,
} from "./style";

export const useProtectedPage = () => {
  const history = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      history("/login");
    }
  }, []);
};
export const useProtectedPageLogin = () => {
  const history = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      goToAdminHomePage(history);
    }
  }, []);
};

const AdminHomePage = () => {
  useProtectedPage();
  const history = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    goToLogin(history);
  };
  const [trips, error, isLoading] = useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/thiago/trips"
  );
  return (
    <div>
        {isLoading && <p>Carregando</p>}
        {!isLoading && error && <p>Ocorreu um erro</p>}
        {!isLoading &&
          trips &&
          trips.length > 0 &&
          trips.map((trip) => {
            return (
              <>
                <DivInput>
                  {trip.name}
                  <HeroContainerButton>
                    <Button3 onClick={() => goToTripDetails(history, trip.id)}>
                      Detalhes
                    </Button3>
                    <Button3>Deletar</Button3>
                  </HeroContainerButton>
                </DivInput>
              </>
            );
          })}
        <HeroContainerButton>
          <Button2 onClick={logout}>Logout</Button2>
          <Button2 onClick={() => goToCreateTrip(history)}>
            Cadastrar Viagem
          </Button2>
          <Button2 onClick={() => goToHome(history)}>Voltar</Button2>
        </HeroContainerButton>
    </div>
  );
};

export default AdminHomePage;
