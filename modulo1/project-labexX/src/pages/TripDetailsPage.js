import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { token } from "../constants/token";
import { useProtectedPage } from "./AdminHomePage";
import {
  Button3,
  ContainerH1,
  ContainerH3,
  ContainerP,
  ContainerPa,
  DivInput,
  FonteH1,
  HeroContainer,
  HeroContainer2,
  HeroContainerButton,
  TextoH3,
} from "./style";

const TripDetailsPage = () => {
  useProtectedPage();
  const [tripDetails, setTripDetails] = useState([]);
  const [state,setState] = useState([]);
  const params = useParams();

  const detailsPage = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/thiago/trip/${params.id}
    `,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        setTripDetails(response.data.trip);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const body = {
    approve: state
}
   const decideCandidate = (id, candidateId) => {
    axios
      .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/thiago/trips/${id}/candidates/${candidateId}/decide`, body, {
        headers: {
          ContentType: "application/json",
          auth: localStorage.getItem("token"),
        },
      })
      .then((resp) => {
        console.log(resp.data);
        setState();
        detailsPage()
      })
      .catch((error) => {
        alert("Deu errado!");
        console.log(error);
      });
  };
  const candidates =
    tripDetails.candidates &&
    tripDetails.candidates.length > 0 &&
    tripDetails.candidates.map((detail) => {
      return (
        <div>
          <HeroContainer>
            <p>Nome: {detail.name}</p>
            <p>Profissão: {detail.profession}</p>
            <p>Idade: {detail.age}</p>
            <p>País: {detail.country}</p>
            <p>Texto de Candidatura: {detail.applicationText}</p>
            <Button3 onClick={() => decideCandidate(tripDetails.id,detail.id)}>aprovar</Button3>
            <Button3 onClick={() => decideCandidate(tripDetails.id,detail.id)}>reprovar</Button3>
          </HeroContainer>
        </div>
      );
    });
  useEffect(detailsPage, [params.id]);
  return (
    <>
      <div>
        <HeroContainer2>
          <FonteH1>Nome: {tripDetails.name}</FonteH1>
          <p>Descrição: {tripDetails.description}</p>
          <p>Planeta: {tripDetails.planet}</p>
          <p>Duração: {tripDetails.durationInDays}</p>
          <p>Data: {tripDetails.date}</p>
        </HeroContainer2>

        <TextoH3>Candidatos:</TextoH3>
        <p>{candidates}</p>
      </div>
    </>
  );
};

export default TripDetailsPage;
