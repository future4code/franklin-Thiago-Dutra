import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
`;
export const HeroContainer2 = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  flex-direction: column;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
`;
export const HeroContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
`;
export const VideoContainer = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
`;
export const ContainerH1 = styled.h1`
  color: #fff;
  font-size: 100px;
  font-family: "Anek Latin", sans-serif;
`;
export const FonteH1 = styled.h1`
  color: #fff;
  font-size: 40px;
  font-family: "Smooch", cursive;
`;
export const TextoH3 = styled.h3`
  color: #fff;
  font-size: 15px;
  color: black;
  font-family: "Anek Latin", sans-serif;
`;
export const ContainerP = styled.p`
  margin-top: 8px;
  color: #fff;
  font-size: 32px;
  font-family: "Smooch", cursive;
`;
export const ContainerPa = styled.p`
  box-sizing: border-box;
  width: 200px;
  color: black;
  font-size: 20px;
  font-family: "Smooch", cursive;
`;
export const DivInput = styled.div`
  width: 300px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  flex-direction: column;
`;
export const InputBox = styled.input`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 25px;
  border-radius: 2px;
  border-style: solid;
  padding: 10px;
  ::placeholder {
    color: rgb(205, 205, 205);
  }
`;
export const Button = styled.button`
  padding: 12px 26px;
  font-size: 20px;
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  transition: all 0.3s ease-out;
  margin-right: 50px;
  font-family: "Staatliches", cursive;
  :hover {
    transition: all 0.3s ease-out;
    background: #fff;
    color: #242424;
    transition: 250ms;
  }
`;
export const Button2 = styled.button`
  padding: 12px 26px;
  font-size: 20px;
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: black;
  color: white;
  border: 1px solid #fff;
  transition: all 0.3s ease-out;
  margin-right: 50px;
  font-family: "Staatliches", cursive;
  :hover {
    transition: all 0.3s ease-out;
    background: transparent;
    color: #fff;
    transition: 250ms;
  }
`;
export const Button3 = styled.button`
  width: 200px;
  font-size: 20px;
  border-radius: 20px;
  cursor: pointer;
  background-color: black;
  color: white;
  border: 1px solid #fff;
  transition: all 0.3s ease-out;
  font-family: "Staatliches", cursive;
  :hover {
    transition: all 0.3s ease-out;
    background: transparent;
    color: #fff;
    transition: 250ms;
  }
`;