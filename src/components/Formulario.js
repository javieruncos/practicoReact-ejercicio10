import React from "react";
import { useState } from "react";
import { Container, Row,Col,Button } from "react-bootstrap";
import ContendorCards from "./ContendorCards";

const Formulario = () => {
     
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [select, setSelect] = useState("");
    const [arregloPelicula, setArregloPelicula] = useState([])
    

   
    const handleSubmit=(e)=>{
       e.preventDefault();
       let pelicula = {
        nombre:nombre,
        descripcion:descripcion,
        select:select
       }

       setArregloPelicula([...arregloPelicula,pelicula])
       setNombre("")
       setDescripcion("")
       setSelect("")
    }




  return (
    <>
      <Container className="my-5">
        <Row>
          <Col md={12} className="d-flex justify-content-center">
            <form className="d-flex flex-column w-100 ms-5" onClick={handleSubmit}>
              <label>Nombre</label>
              <input 
              type="text" 
              className="w-100 form-control" 
              onChange={(e)=> setNombre(e.target.value)}
              value={nombre}
              ></input>
              <label>Descripcion</label>
              <textarea type="text"
               className="w-100 form-control" 
               onChange={(e)=> setDescripcion(e.target.value)}
               value={descripcion}
               ></textarea>
              <label>Genero</label>
              <select 
              className="w-50"
              onChange={(e)=> setSelect(e.target.value)}
               value={select}
               >
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
