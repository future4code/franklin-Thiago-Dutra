import React, { useState } from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
  const [nomeUser, setnomeUser] = useState ("")
  const [fotoUser, setFotoUser] = useState ("")
  const [fotoPost, setFotoPost] = useState ("")

  const [posts, setPosts] = useState([
    {
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/200',
      fotoPost: 'https://picsum.photos/200/150'
    }
  ]
  )

  const handleInputNomeUser = (e) =>{
    setnomeUser(e.target.value)
  }
  const handleInputfotoUser = (e) =>{
    setFotoUser(e.target.value)
  }
  const handleInputfotoPost = (e) =>{
    setFotoPost(e.target.value)
  }
  const adicionaPost = () => {
    const novoPost = {
      nomeUsuario: nomeUser,
      fotoUsuario: fotoUser,
      fotoPost: fotoPost
    }

    setPosts([...posts, novoPost])
  }
 
  const listaDePosts = posts.map((post) => {

    return (
      <Post 
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost} />
    );
  }
  )

return(
  <MainContainer>
    <label>nomeUser</label>
    <input onChange={handleInputNomeUser} value={nomeUser}></input>

    <label>fotoUser</label>
    <input onChange={handleInputfotoUser} value={fotoUser}></input>

    <label>fotoPost</label>
    <input onChange={handleInputfotoPost} value={fotoPost}></input>
    <button onClick={adicionaPost}>adiciona</button>
           
               {listaDePosts}
        </MainContainer>
)

}


export default App;
