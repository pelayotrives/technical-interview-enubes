import React from "react";
import Button from "react-bootstrap/Button";
import Cards from "../components/Cards";
import CardsImages from "../components/Carousel";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <div className="container-global">
        <div className="container-image"></div>
        <div className="container-text">
          <div className="container-info">
            <h6>Cero emisiones. Cero problemas. Objetivo 2050.</h6>
            <h1>Ruta hacia la ecología total y descarbonización</h1>
            <p>
              En línea con nuestros objetivos de París, hemos fijado rutas con
              objetivos específicos.
            </p>
          </div>
          <div className="container-buttons">
          <Button variant="outline-light" className="button-cta"><Link to={"/catalogo"} className="link-main">Objetivos</Link></Button>
          <Button variant="outline-light" className="button-cta"><Link to={"/catalogo"} className="link-main">Información</Link></Button>
          </div>
        </div>
        <div className="cards-intro">
          <h2>Últimas actualizaciones</h2>
          <p>
            Consulta la información acerca de nuestras últimas noticias,
            eventos, información y cotización. Descubre lo que Repsol puede
            ofrecerte y aprovéchate de los descuentos y las ofertas que
            publicamos periódicamente. ¡Únete a la comunidad Repsol y forma
            parte de una gran familia con mucho que ofrecer!
          </p>
        </div>
        <Cards />
        <div className="cards-images">
          <h2>
            Últimas novedades y retos a los que nos enfrentamos en la actualidad
          </h2>
          <p>Los últimos contenidos publicados:</p>
        </div>
        <CardsImages />
        <div className="columns-text">
          <div className="column-left">
            En Repsol tenemos claro un objetivo: nuestro proyecto más importante
            es el mantenimiento de nuestro planeta. Queremos reducir las
            emisiones y el uso de combustibles fósiles para 2050, y cada día
            estamos dando prueba de ello. Mejoramos las tecnologías de energías
            renovables, apostamos por propuestas ecológicas y subvencionamos un
            gran número de iniciativas sostenibles.
          </div>
          <div className="column-right">
            Campus es el símbolo corporativo de Repsol, una referencia
            arquitectónica a nivel mundial que refleja nuestra cultura y nuestra
            evolución permanente. Nuestra sede corporativa es la confirmación
            del compromiso de Repsol con las personas, la sociedad y el planeta.
            En estas instalaciones, más de 4.000 profesionales de todas las
            áreas y negocios trabajan cada día para mejorar la energía del
            futuro.
          </div>
        </div>
        <div className="container-footer">
          <div className="container-info-footer">
            <h1>¿Todavía no has escuchado nuestros podcast?</h1>
            <div className="columns-text">
              <div className="column-left">
                #somosFUTURO es una webserie llena de episodios creados para
                impulsar el talento de los más jóvenes de la industria.
              </div>
              <div className="column-right">
                Contamos con algunos de los divulgadores científicos más
                prestigiosos del panorama científico de nuestro país.
              </div>
            </div>
            <div className="container-footer-buttons">
            <Button variant="outline-light" className="button-footer-cta"><Link to={"/catalogo"} className="link-main">¡Escúchalo ahora!</Link></Button>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}
