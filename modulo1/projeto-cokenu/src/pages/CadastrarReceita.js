import { Typography } from '@mui/material';
import React from 'react'
import useProtectedPage from '../components/hooks/useProtectedPage';
import CadastrarReceitaForm from './CadastrarReceitaForm';
import { RecipeContainer } from './styled/CadastrarReceitaStyle';
import { ScreenContainer } from './styled/CadastroUserStyled';

const CadastrarReceita = () => {
  useProtectedPage();
  return (
    <ScreenContainer>
      <RecipeContainer>
        <Typography gutterBottom varian={'h4'} align={'center'} color={'textPrimary'}>Adicionar Nova Receita</Typography>
        <CadastrarReceitaForm/>
      </RecipeContainer>
    </ScreenContainer>
  )
}

export default CadastrarReceita