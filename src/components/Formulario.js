import React from "react";
import { useState } from "react";
import { Container, Row,Col,Button } from "react-bootstrap";
import ContendorCards from "./ContendorCards";

const Formulario = () => {
     
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [select, setSelect] = useState("");
    

   





  return (
    <>
      <Container className="my-5">
        <Row>
          <Col md={12} className="d-flex justify-content-center">
            <form className="d-flex flex-column w-100 ms-5">
              <label>Nombre</label>
              <input type="text" className="w-100 form-control"></input>
              <label>Descripcion</label>
              <textarea type="text" className="w-100 form-control"></textarea>
              <label>Genero</label>
              <select className="w-50">
                <option>Comedia</option>
                <option>Accion</option>
                <option>Drama</option>
              </select>
              <div className="d-flex justify-content-center my-5">
                <Button type="submit">enviar</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
      <div>
        <ContendorCards />
      </div>
    </>
  );
};

export default Formulario;
