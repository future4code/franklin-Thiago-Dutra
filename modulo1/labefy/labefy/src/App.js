import './App.css';
import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useState,useRef } from 'react';
import axios from 'axios';

const DivGeral = styled.div`
  width: 100vh;
margin-left:50vh ;
 display:flex;
 align-items: center;
 justify-content: center;
 background-color: #1b2037;
 color: white;
 border: 3px solid black;
`
const DivGeralMostra = styled.div`
margin-left:50vh ;
width: 100vh;
 display:flex;
 align-items: center;
 justify-content: center;
 background-color: #1b2037;
 color: white;
 border: 3px solid black;
`
const DivMeio = styled.div`
  margin-left:50vh ;
  width: 100vh;
  height: 50vh;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: #4f5885;
`
const InputGeral = styled.input`
  border-radius: 20px;
  text-align: center;
`
const DivBaixo = styled.div`
  margin-left: 50vh;
  width: 100vh;
  height: 50vh;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color:#4f5885;
  border: 2px black;
  `
  const Button = styled.button`
  display :flex;
  text-align: center;
  border-radius: 4px;
  border: none;
  color: #fff;
  background: #8b9ce5;
  `


function App() {
  const [playlists, setPlaylists] = useState([]);
  const playlistInput = useRef();
  const musicasInput = useRef();
  const artistasInput = useRef();
  const urlInput = useRef();
  const [MusicasPlaylist, setMusicasPlaylist] = useState([]);
  const [idPlaylistSelector, setIdPlaylistSelector] = useState('');

  const headers = {
   headers: {
     Authorization: "thiago-dutra-franklin",
   },
 };

 useEffect(() => {
   const getAllPlaylists = async () => {
     await axios
       .get(
         `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists
       `,
         headers
       )
       .then((response) => {
         setPlaylists(response.data.result.list);
         // setIsLoading(false);
       })
       .catch((error) => {
         alert(error.message);
       });
   };
   getAllPlaylists();
 }, [playlists]);

 const postPlaylist = () => {
   axios
     .post(
       `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`,
       {
         name: playlistInput.current.value,
       },
       headers
     )
     .then((response) => {
       alert(`Playlist ${playlistInput.current.value} adicionada com sucesso`);
     })
     .catch((e) => {
       alert(e.message);
     });
   if (playlistInput.current.value) {
     playlistInput.current.value = "";
   }
 };
 
  const deleteMusic = (id) => { 
   axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
   headers
   )
   .then((response) => {
    console.log(response);
  })
  .catch((erro) => {
    console.log(erro);
  })
}


const pegarMusicas = (id) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
    headers
    )
    .then((response) => {
      setMusicasPlaylist(response.data.result.tracks);
    })
    .catch((erro) => {
      console.log(erro);
    })
    setIdPlaylistSelector(id)
}

const adicionarMusicas = (id) => {
  const body = {
    "name": musicasInput.current.value,
    "artist": artistasInput.current.value,
    "url": urlInput.current.value
  }

  axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,body,
  headers
  )
  .then((response) => {
    setMusicasPlaylist(response.data.result.tracks);
    pegarMusicas(id);
  })
  .catch((erro) => {
    console.log(erro);
  })
}

const deleteSong = (id) => {
  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylistSelector}/tracks/${id}`

  axios.delete(url,headers)
    .then((response) => {
      console.log(response);
   
    })
    .catch((error) => {
      console.log(error);
    })
}
  

  const PlaylistLista = playlists.map(playlist => {
    return (<DivGeralMostra key={playlist.id}>
        <li>{playlist.name} 
        <Button onClick={() => deleteMusic(playlist.id)}>Deletar</Button>
        <Button onClick={() => pegarMusicas(playlist.id)}>Ver Musicas da Playlist</Button>
        </li>
        </DivGeralMostra>
    )
  })

  const PlaylistMusica = MusicasPlaylist.map(musicasPlaylist => {
    return (<DivGeralMostra key={musicasPlaylist.name}>
        <li>{musicasPlaylist.name} </li>
        <br></br>
           <li> {musicasPlaylist.artist}</li>
            <li>{musicasPlaylist.url} </li>
            <Button onClick={() => deleteSong(musicasPlaylist.id)}>Deleter Musica</Button>
    </DivGeralMostra>
    )
  })
  useEffect(
    pegarMusicas
  ,[PlaylistMusica])
  useEffect(
    adicionarMusicas
  ,[MusicasPlaylist])

  return (
    <>
    <DivGeral>
    <h1>Playlist Labenu</h1>
    </DivGeral>
    <DivMeio>
      <InputGeral placeholder='Nome da Playlist' ref={playlistInput}></InputGeral>
      <Button onClick={postPlaylist}>Clique aqui</Button>
    </DivMeio>
    {PlaylistLista}
    {PlaylistMusica}
    <DivBaixo>
      <InputGeral placeholder='Nome da Musica' ref={musicasInput}/>
      <InputGeral placeholder='Nome do artista' ref={artistasInput}/>
      <InputGeral placeholder='URL' ref={urlInput}/>
      <Button onClick={() => {adicionarMusicas(idPlaylistSelector)}}>Clique aquiii</Button>
    </DivBaixo>
    </>
  );
}

export default App;
