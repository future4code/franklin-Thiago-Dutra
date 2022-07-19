import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { token } from "../constants/token";
import { useProtectedPage } from "./AdminHomePage";

const TripDetailsPage = () => {
  useProtectedPage();
  const [tripDetails, setTripDetails] = useState([]);
  const params = useParams();
  const detailsPage = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/thiago/trip/${params.id}
    `,
        {
          headers: token,
        }
      )
      .then((response) => {
        setTripDetails(response.data.trip);
      });
  };
  useEffect(detailsPage, [params.id]);
  return (
    <>
      <div>Detalhes da Viagem</div>
      <p>{tripDetails.name}</p>
    </>
  );
};

export default TripDetailsPage;
