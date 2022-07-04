import { Fab } from '@mui/material'
import styled from 'styled-components'

export const RecipeListContainer = styled.div`
  display: flex;
  justify-content:center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px;
`

export const AddRecipeButton = styled(Fab)`
  position: fixed !important;
  right: 20px;
  bottom: 20px;
  z-index: 3;
`
