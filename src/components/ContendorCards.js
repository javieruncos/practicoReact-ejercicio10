import React from "react";
import { Container, Row} from "react-bootstrap";
import CardsP from "./CardsP";

const ContendorCards = ({arregloPelicula}) => {
  return (
    <Container className="mt-5">
      <Row>
      
          {
             
             arregloPelicula.map((item,indice)=><CardsP nombre={item.nombre} key={indice} descripcion={item.descripcion} genero={item.select} />)



          

          }
        
      </Row>
    </Container>
  );
};

export default ContendorCards;
