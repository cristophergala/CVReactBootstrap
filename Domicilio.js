import React from "react";
import logo5 from "../assets/logo5.jpeg";

import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const Domicilio = () => {
  return (
    <>
      <img src={logo5} />
      <div class="card-body">
        <h5 class="card-title">Domicilio:</h5>
        <p class="card-text">
          Avenida Josefina García M2L23 Fraccionamiento Los Lagos
        </p>
        <p class="card-text">Comitán De Domínguez Chiapas México</p>
        <a href="Estudio" class="btn btn-primary">
          ir a Estudio
        </a>
      </div>
    </>
  );
};

export default Domicilio;
