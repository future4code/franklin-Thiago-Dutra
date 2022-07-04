import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/coordinator";

const useUnProtectedpage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToHome(navigate);
    }
  });
};

export default useUnProtectedpage;
