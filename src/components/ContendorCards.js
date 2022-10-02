import React from "react";
import { Container, Row} from "react-bootstrap";
import CardsP from "./CardsP";

const ContendorCards = ({arregloPelicula,borrarPelicula}) => {
  return (
    <Container className="mt-5">
      <Row>
      
          {
             arregloPelicula.map((item,indice)=><CardsP nombre={item.nombre} key={indice} descripcion={item.descripcion} genero={item.select} borrarPelicula={borrarPelicula} item={item}/>)

          }
        
      </Row>
    </Container>
  );
};

export default ContendorCards;
