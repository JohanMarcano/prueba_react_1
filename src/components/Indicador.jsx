import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Indicador({indicador}) {

  const {codigo, nombre, unidad_medida, fecha, valor} = indicador;  

  return (
    <Card style={{ width: '18rem' }} className="bg-secondary text-white mx-auto">
      <Card.Body className="text-center">
        <Card.Title>{codigo}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush bg-dark">
        <ListGroup.Item variant="dark">{nombre}</ListGroup.Item>
        <ListGroup.Item variant="dark">{unidad_medida}</ListGroup.Item>
        <ListGroup.Item variant="dark">{fecha}</ListGroup.Item>
        <ListGroup.Item variant="dark">{valor}</ListGroup.Item>
      </ListGroup>
    
    </Card>
  );
}

export default Indicador;