import React, { useState } from 'react'
import styled from 'styled-components'
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 50vh;
    width: 100vh;
    height:90vh;   
    border: 5px solid green;
    border-radius:5px;
    flex-direction: column;
    `
    const ContainerInput = styled.div`
    display:flex;
    margin-left:50vh;
    align-items: center;
    text-align: center;
    height: auto;
    color: black;
`
const App = () => {
    const [message, setMessage] = useState ("")
    const [user, setUser] = useState ("")
    const [chat, setChat] = useState([
      {
        nameUser:'teste',
        messageUser:'teste'
      },
    ]);

    const HandleInputMessage = (e) => { 
      setMessage(e.target.value); 
    }

    const HandleInputUser = (e) => { 
      setUser(e.target.value); 
    }
    const enviarMsg = () => {  
      const msgAtualizada = {
        nameUser: user,
        messageUser: message
      }
      const fullChat = [...chat, msgAtualizada];

    setChat(fullChat);
    }
    const whatsLab = chat.map((byUser) => {
      return(
        <p>
          {byUser.nameUser} : {byUser.messageUser}
       </p>
      );
    });


  return (
    <> 
    <Container>{whatsLab} </Container>
    <ContainerInput> 
      <label>Nome</label>
      <input value={user} onChange={HandleInputUser}></input>

      <label>Mensagem</label>
      <input value={message} onChange={HandleInputMessage}></input>

      <button onClick={enviarMsg}>Enviar</button>
    </ContainerInput>
    </>
  )
}

export default App