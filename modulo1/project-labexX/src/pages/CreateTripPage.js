import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import { goToBack } from "../routes/coordinator";
import { useProtectedPage } from "./AdminHomePage";
import { Button2, DivInput, HeroContainerButton, InputBox } from "./style";

const CreateTripPage = () => {
  useProtectedPage();
  const history = useNavigate();

  const [form, onChange, clear] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const createTrip = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/thiago/trips",
        form,
        {
          headers: {
            ContentType: "application/json",
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        alert(`Viagem ${form.name} cadastrada com sucesso`);
        console.log(response);
        clear();
      })
      .catch((erro) => {
        alert("Erro ao cadastrar");
        console.log(erro);
      });
  };
  return (
    <>
      <DivInput>
        <h1>Formulário de Inscrição</h1>

        <form onSubmit={createTrip}>
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
            name={"planet"}
            value={form.planet}
            onChange={onChange}
            required
            pattern={"^.{3,}"}
            title={"O nome deve ter no mínimo 3 letras"}
            placeholder="Planeta"
          />

          <InputBox
            name={"date"}
            value={form.date}
            onChange={onChange}
            required
            placeholder="Data"
          />
          <InputBox
            name={"description"}
            value={form.description}
            onChange={onChange}
            required
            pattern={"^.{10,}"}
            title={"Insira no mínimo 10 caracteres."}
            placeholder="Descriçao"
          />
          <InputBox
            name={"durationInDays"}
            value={form.durationInDays}
            onChange={onChange}
            placeholder="Duracao"
          ></InputBox>
          <HeroContainerButton>
            <Button2 onClick={() => goToBack(history)}>Voltar</Button2>
            <Button2 type="submit">Enviar informações</Button2>
          </HeroContainerButton>
        </form>
      </DivInput>
    </>
  );
};

export default CreateTripPage;
