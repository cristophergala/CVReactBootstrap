import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Hobbies = () => {
  return (
    <div>
      <hr></hr>

      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
              <strong>Cuando estoy Aburrido</strong>
              Me divierto Primeramente viendo peliculas , videos o series de
              terror extremo para despertarme al 100% y seguir adelante a todo
              hasta Terminarlo ; especificamente amo ver la saga de Actividad
              Paranormal , Rec , Chucky y videos de los canales de YouTube:
              Danny Phantom Y Vagon Del Miedo.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body">
              <strong>Para sacar mi Talento que pocos saben </strong>
              Cuando nadie de mi familia esta en casa , pongo mi música a todo
              volumen en YouTube o Spotify , y amo hacer videos en vivo en
              Instagram Ya sea Cantando , Compartiendo Historias Inspiradoras o
              personas famosas o de mi actuando o cantando ya que son mis 2
              pasiones preferidas desde niño, asi como tambien escribir mi
              biografía que hago desde 2012 a mis 13 años
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div class="accordion-body">
              <strong>Amo Ir al Mall</strong>
              Si de Pasar Horas De Diversión Se Trata , 1000 veces me encanta ir
              a la Plaza (Mall o Centro Comercial) , Comer Una Deliciosa Pizza ,
              Helado , Ver Una Peli , buscar Ofertas o simplemente respirar el
              Olor de la comida o frituras que realizan y escuchar musica al
              celular relajandome y olvidar el tiempo por un rato. aunque Ambar
              Fashion Mall tengo que conocerla aún de mientras solo por fuera me
              enamora , mientras que en Mi natal CDMX Perisur Y Gran Sur fueron
              parte de mi infancia por 5 años y aquí Plaza Las Flores , Plaza
              San Cristobal y Plaza Galerías Llenaban ese vacío de no tener un
              lugar donde divertirme , claro en lo que conozco otras MacroPlazas
            </div>
          </div>
        </div>
      </div>

      <hr></hr>
      <div class="p-3 mb-2 bg-success text-white">
        <center>
          <h5>Galería De Imagenes Hobbies</h5>
        </center>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
        </div>

        <p class="card-text"></p>
        <a href="Acerca" class="btn btn-primary">
          ir a Acerca De
        </a>
      </div>
    </div>
  );
};

export default Hobbies;
