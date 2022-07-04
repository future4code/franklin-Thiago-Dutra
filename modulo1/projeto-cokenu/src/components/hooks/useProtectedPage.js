import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const useProtectedPage = () => {
    const history = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      history('/login');
    }
  },[]);
};

export default useProtectedPage