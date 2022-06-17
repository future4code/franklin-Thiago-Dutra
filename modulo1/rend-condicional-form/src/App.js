import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Agradecimento from './components/Agradecimento';
import { useState } from 'react';

function App() {

  const [etapa, setEtapa]=useState(1)
  const switchRender = () => {
    switch (etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Agradecimento />;
      default:
        break;
  }
}

  const mudarEtapa = () => {
    setEtapa(etapa + 1);
  }
  return (
    <div className="App">
      {switchRender()}       
      <br />
      {etapa < 4? <button onClick={mudarEtapa}>Próxima etapa</button>: ''}
    </div>
  ); 
}

export default App;