import { useState } from 'react';
import './App.css';
import MiApi from './components/MiApi';
import Indicador from './components/Indicador';
import Buscador from './components/Buscador';

function App() {
  const [data, setData] = useState(null);
  const [filtrados, setFiltrados] = useState(null);

  const ordenarAlfabeticamente = () => {
    const newData = [...data];
    newData.sort((a, b) => a.nombre.localeCompare(b.nombre));
    setFiltrados(newData);
  };

  return (
    <div className='App'>
      <h1 >Prueba React</h1>
      <div className='card'></div>
      <Buscador indicadores={data} setFiltrados={setFiltrados} />
      <MiApi setData={setData} />
      <button onClick={ordenarAlfabeticamente}>Ordenar Alfabéticamente</button>

      <div className='container'>
        <div className='row'>
          {filtrados?.map((indicador) => (
            <div className='col-md-4 mb-3' key={indicador.codigo}>
              <div className='border border-success p-3'>
                <Indicador indicador={indicador} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='h-4'></div>
      <hr />
      <div className='container'>
        <div className='row'>
          {data?.map((indicador) => (
            <div className='col-md-4 mb-3' key={indicador.codigo}>
              <Indicador indicador={indicador} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
