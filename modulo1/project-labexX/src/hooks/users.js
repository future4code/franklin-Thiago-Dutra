import axios from "axios";
import React from "react";

const submitCandidate = (body, id) => {
  axios
    .post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/thiago/trips/${id}/apply`,
      body
    )
    .then((response) => {
      alert(`Candidato ${body.name} inscrito com sucesso`);
    })
    .catch((error) => {
      alert("erro ao se inscrever");
    });
  return <div>users</div>;
};

export default submitCandidate;
