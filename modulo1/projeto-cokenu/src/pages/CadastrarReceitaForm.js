import { Button, TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { BASE_URL } from "../components/constants/urls";
import useForm from "../components/hooks/useForm";
import { AddRecipeFormContainer } from "./styled/CadastrarReceitaStyle";
import { InputsContainer } from "./styled/CadastroUserStyled";

const CadastrarReceitaForm = () => {
  const [form, onChange, clear] = useForm({
    title: "",
    description: "",
    image: "",
  });

  const createReceita = () => {
    axios
      .post(`${BASE_URL}/recipe`, form, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        alert(response.data.message)
        clear()
      })
      .catch((error) => alert(error.response.message));
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    createReceita();
  };
  return (
    <form onSubmit={onSubmitForm}>
      <AddRecipeFormContainer>
        <InputsContainer>
          <TextField
            name={"title"}
            value={form.title}
            onChange={onChange}
            label={"Título"}
            variant={"outlined"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
          />
          <TextField
            name={"description"}
            value={form.description}
            onChange={onChange}
            label={"Descrição"}
            variant={"outlined"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
          />
          <TextField
            name={"image"}
            value={form.image}
            onChange={onChange}
            label={"Foto"}
            variant={"outlined"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
          />
        </InputsContainer>
        <Button color={"primary"} variant={"contained"} type={"submit"}>
          Adicionar Receita
        </Button>
      </AddRecipeFormContainer>
    </form>
  );
};

export default CadastrarReceitaForm;
