import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminHomePage, goToBack, goToCreateTrip, goToHome, goToLogin } from "../routes/coordinator";
import { Button, Button2, HeroContainer, HeroContainerButton } from "./style";

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
    localStorage.removeItem('token')
    goToLogin(history)
  }

  return (
    <div>
      <HeroContainer>
        <HeroContainerButton>
          <Button2 onClick={logout}>Logout</Button2>
          <Button2 onClick={() => goToCreateTrip(history)}>Cadastrar Viagem</Button2>
          <Button2 onClick={() =>goToHome(history)}>Voltar</Button2>
        </HeroContainerButton>
      </HeroContainer>
    </div>
  );
};

export default AdminHomePage;
