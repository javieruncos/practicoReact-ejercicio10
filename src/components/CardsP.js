import React from 'react';
import { Card,Button,Col} from 'react-bootstrap';

const CardsP = ({nombre,descripcion,genero}) => {
    return (
        <Col md={4}>
       <Card>
            <Card.Body className="text-center">
              <Card.Title className="my-4">{nombre}</Card.Title>
              <Card.Text className="my-4">
              {descripcion}
              </Card.Text>
              <p><span>{genero}</span></p>
              <Button variant="primary">Borrar</Button>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default CardsP;