import React from 'react'
import styled from 'styled-components'

const DivMeio = styled.div`
display: flex;
justify-content:center;
align-items: center;
width: 100vh;
height: 100vh;
border-radius: 20px;
background-color: red;
`
const DivImagem = styled.div`
display: flex;
    width: 100px;
    background-color: white;
    color: black;
`

const ButtonHome = styled.button`
width: 300px;
height: 80px;
text-align: center;
justify-content: column;
`

const Home = () => {
  return (
    <div>
        <DivMeio>
       <ButtonHome>Login</ButtonHome>
       <ButtonHome>Ver</ButtonHome>
        </DivMeio>
       <DivImagem>ola</DivImagem>
    </div>
  )
}

export default Home