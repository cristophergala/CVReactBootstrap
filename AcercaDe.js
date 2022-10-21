import React from "react";
import Logo from "../assets/logo2.jpg";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const AcercaDe = () => {
  return (
    <>
      <img src={Logo} />
      <div class="card-body">
        <h1>Curriculum Vitae Digital</h1>
        <h5 class="card-title">Nombre:</h5>
        <p class="card-text">Cristopher Alberto Lara García</p>
        <p class="card-text">24 años</p>
        <a href="Domicilio" class="btn btn-primary">
          ir a Domicilio
        </a>
      </div>
    </>
  );
};

export default AcercaDe;
