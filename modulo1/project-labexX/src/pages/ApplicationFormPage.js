import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import useRequestData from "../hooks/useRequestData";
import submitCandidate from "../hooks/users";
import { goToBack } from "../routes/coordinator";
import { Button2, DivInput, HeroContainerButton, InputBox } from "./style";

const ApplicationFormPage = () => {
  const navigate = useNavigate();
  const [trips] = useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/thiago/trips"
  );
  const [form, onChange, clear] = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });
  const id = form.trip;

  const submit = (e) => {
    e.preventDefault();
    submitCandidate(form, id);
    clear();
  };

  const tripsOption =
    trips &&
    trips.length > 0 &&
    trips.map((trip) => {
      return (
        <option name="id" value={trip.id} key={trip.id}>
          {trip.name} - {trip.planet}
        </option>
      );
    });
  return (
    <>
      <DivInput>
        <h1>Formulário de Inscrição</h1>

        <form onSubmit={submit}>
          <InputBox
            name={"name"}
            value={form.name}
            onChange={onChange}
            required
            pattern={"^.{3,}"}
            title={"O nome deve ter no mínimo 3 letras"}
            placeholder="Nome"
          />
          <InputBox
            name={"age"}
            value={form.age}
            onChange={onChange}
            type={"number"}
            min={18}
            title={"A idade mínima é 18 anos"}
            placeholder="Idade"
          />
          <InputBox
            name={"applicationText"}
            value={form.applicationText}
            onChange={onChange}
            required
            pattern={"^.{30,}"}
            title={"Insira no mínimo 30 caracteres."}
            placeholder="Resumo sobre você"
          />
          <InputBox
            name={"profession"}
            value={form.profession}
            onChange={onChange}
            required
            pattern={"^.{10,}"}
            title={"Insira no mínimo 10 caracteres."}
            placeholder="Profissão"
          />
          <InputBox
            name={"country"}
            value={form.country}
            onChange={onChange}
            placeholder="País"
          ></InputBox>
          <select name="trip" onChange={onChange} required value={form.trip}>
            <option>Escolha uma viagem</option>
            {tripsOption}
          </select>
          <HeroContainerButton>
            <Button2 onClick={() => goToBack(navigate)}>Voltar</Button2>
            <Button2 type="submit">Enviar informações</Button2>
          </HeroContainerButton>
        </form>
      </DivInput>
    </>
  );
};

export default ApplicationFormPage;
