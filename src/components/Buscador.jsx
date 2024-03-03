import { useState } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Buscador( {indicadores, setFiltrados} ) {

  const [busqueda, setBusqueda] = useState('');
  const [propiedad, setPropiedad] = useState('nombre')

  const handleSubmit = (e) => {
    e.preventDefault();
  

    const filtrados = indicadores.filter(
      indicador => indicador[propiedad].toLowerCase().includes(busqueda.toLowerCase())
    )

    setFiltrados(filtrados);

  }

  return (
    <div>
      <Form onSubmit={handleSubmit} className='mb-3 d-flex gap-5'>
          
          <Form.Group className="mb-3 w-100" onSubmit={handleSubmit}>
              <Form.Control 
                type="text" 
                placeholder="Busca un indicador" 
                value={busqueda} 
                onChange={e => setBusqueda(e.target.value) } 
              />
          </Form.Group> 

        <Form.Select aria-label="Default select example" onChange={ e => setPropiedad(e.target.value)} >
            <option value="nombre">nombre</option>
            <option value="codigo">codigo</option>
        </Form.Select>

          <Button variant="primary" type="submit" className='w-50'>
                Buscar
          </Button>

      </Form>
   </div>
  )
}

export default Buscador