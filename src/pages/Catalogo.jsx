import React, { useState } from "react";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

import g95 from "../assets/95.png";
import g98 from "../assets/98.jpg";
import d1 from "../assets/diesel1.jpg";
import d2 from "../assets/diesel2.png";

import i1 from "../assets/i1.svg";
import i3 from "../assets/i3.svg";
import i4 from "../assets/i4.svg";
import i5 from "../assets/i5.svg";
import i6 from "../assets/i6.svg";
import i7 from "../assets/i7.svg";
import i8 from "../assets/i8.svg";
import i9 from "../assets/i9.svg";
import i10 from "../assets/i10.svg";

export default function Catalogo() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);
  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);
  const handleClose8 = () => setShow8(false);
  const handleShow8 = () => setShow8(true);
  const handleClose9 = () => setShow9(false);
  const handleShow9 = () => setShow9(true);
  const handleClose10 = () => setShow10(false);
  const handleShow10 = () => setShow10(true);

  return (
    <div className="Catalogo">
      <div className="container-global-catalogo">
        <div className="container-image-catalogo"></div>
        <div className="container-text-catalogo">
          <div className="container-info">
            <h6>Productos y servicios de Repsol</h6>
            <h1>Soluciones para facilitar tu día a día</h1>
            <p>
              Para el hogar, la carretera, tu empresa o industria, la
              agricultura, marina o aviación. <br /> Te ofrecemos multitud de
              soluciones en función de tus necesidades.
            </p>
          </div>
        </div>
        <div className="container-modals">
          <div className="container-modals-info">
            <h2>Nuestros servicios</h2>
            <p>
              Cada uno de los productos y servicios que desarrollamos desde
              Repsol cuenta con la máxima calidad, la mayor seguridad y la más
              alta innovación.
            </p>
          </div>
          <div className="container-modals-main">
            <div className="modal-opener-1">
              <button onClick={handleShow1}>
                <div className="modal-opener-body">
                  <img className="modal-logo" src={i1} alt="Logo 1" />
                  <h5>Química</h5>
                  <p>
                    Tu vida está llena de química. Productos cotidianos que
                    mejoran tu calidad de vida, tu bienestar y, sobre todo, tu
                    seguridad.
                  </p>
                </div>
              </button>
            </div>

            <div className="modal-opener-2">
              <button onClick={handleShow2}>
                <div className="modal-opener-body">
                  <img className="modal-logo" src={i5} alt="Logo 2" />
                  <h5>Oil & Gas Trading</h5>
                  <p>
                    Suministramos, comercializamos y transportamos
                    internacionalmente la materia prima más usada.
                  </p>
                </div>
              </button>
            </div>

            <div className="modal-opener-3">
              <button onClick={handleShow3}>
                <div className="modal-opener-body">
                  <img className="modal-logo" src={i3} alt="Logo 3" />
                  <h5>Especialidades</h5>
                  <p>
                    Ponemos a tu disposición nuestros recursos, procesos e
                    innovación para cubrir necesidades a través de nuestros
                    productos.
                  </p>
                </div>
              </button>
            </div>

            <div className="modal-opener-4">
              <button onClick={handleShow4}>
                <div className="modal-opener-body">
                  <img className="modal-logo" src={i4} alt="Logo 4" />
                  <h5>Estaciones</h5>
                  <p>
                    Te damos muchas razones para que hagas un alto en el camino.
                    Más de 4700 estaciones de servicio con servicios de alta
                    calidad.
                  </p>
                </div>
              </button>
            </div>

            <div className="modal-opener-5">
              <button onClick={handleShow5}>
                <div className="modal-opener-body">
                  <img className="modal-logo" src={i5} alt="Logo 5" />
                  <h5>Butano y propano</h5>
                  <p>
                    Una solución energética tanto para el confort de tu hogar,
                    la eficiencia de la cocina o el óptimo funcionamiento de tu
                    negocio.
                  </p>
                </div>
              </button>
            </div>

            <div className="modal-opener-6">
              <button onClick={handleShow6}>
                <div className="modal-opener-body">
                  <img className="modal-logo" src={i6} alt="Logo 6" />
                  <h5>Gasóleo</h5>
                  <p>
                    Cubrimos un amplio abanico de sectores industriales en los
                    que suministramos nuestras soluciones e innovadores
                    productos.
                  </p>
                </div>
              </button>
            </div>

            <div className="modal-opener-7">
              <button onClick={handleShow7}>
                <div className="modal-opener-body">
                  <img className="modal-logo" src={i7} alt="Logo 7" />
                  <h5>Luz y gas</h5>
                  <p>
                    El servicio de electricidad y gas natural ideal para tu
                    hogar. Empieza a ahorrar ahora mismo con la garantía de
                    Repsol.
                  </p>
                </div>
              </button>
            </div>

            <div className="modal-opener-8">
              <button onClick={handleShow8}>
                <div className="modal-opener-body">
                  <img className="modal-logo" src={i8} alt="Logo 8" />
                  <h5>Aviación</h5>
                  <p>
                    Carburantes para las demandas más exigentes. Formación y
                    asesoría técnica como complemento para nuestro servicio.
                  </p>
                </div>
              </button>
            </div>

            <div className="modal-opener-9">
              <button onClick={handleShow9}>
                <div className="modal-opener-body">
                  <img className="modal-logo" src={i9} alt="Logo 9" />
                  <h5>Asfaltos</h5>
                  <p>
                    Nuestras soluciones ofrecen las mejores infraestructuras a
                    la sociedad con el respeto por el medio ambiente siempre
                    presente.
                  </p>
                </div>
              </button>
            </div>

            <div className="modal-opener-10">
              <button onClick={handleShow10}>
                <div className="modal-opener-body">
                  <img className="modal-logo" src={i10} alt="Logo 10" />
                  <h5>Lubricantes</h5>
                  <p>
                    Aplicamos nuestros conocimientos en la alta competición en
                    todos los productos. Cuidamos tu motor al máximo.
                  </p>
                </div>
              </button>
            </div>

            {/* ------------------ Modals ------------------ */}
            {/* ------------------ Modal 1 ------------------ */}

            <Modal
              show={show1}
              onHide={handleClose1}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Química</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h3>Los productos de tu día a día</h3>
                <p>
                  En lo que respecta a la petroquímica básica producimos
                  monómeros como etileno, propileno, benceno, butadieno y otros
                  productos que son la base de la petroquímica derivada.
                  <br />
                  <br />
                  Debido al alto nivel de integración de la compañía, la gran
                  mayoría de estas materias primas se destina a la fabricación
                  de productos derivados de Repsol y el resto se comercializa.
                  <br />
                  <br />
                  Nuestra química derivada, incluye productos intermedios y
                  poliolefinas. Entre los primeros se encuentran el estireno,
                  óxido de propileno, polioles poliéter y glicoles propilénicos.
                  En cuanto a las poliolefinas, los plásticos más conocidos,
                  reúnen una amplia combinación de propiedades como
                  flexibilidad, resistencia, bajo peso, estabilidad,
                  impermeabilidad y fácil esterilización.
                  <br />
                  <br />
                  Esta combinación ha propiciado el éxito de estos materiales al
                  convertirse en el material preferido e idóneo para una gran
                  variedad de aplicaciones en innumerables industrias.
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="button-modal"
                  variant="outline-dark"
                  onClick={handleClose1}
                >
                  Cerrar
                </Button>
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://www.repsol.com/content/dam/repsol-corporate/es/productos-y-servicios/productos/qu%c3%admica/oferta-quimica-repsol.pdf"
                >
                  <Button variant="outline-dark">Descargar PDF</Button>
                </a>
              </Modal.Footer>
            </Modal>

            {/* ------------------ Modal 2 ------------------ */}

            <Modal
              show={show2}
              onHide={handleClose2}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Oil & Gas Trading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h3>Trading: petróleo global</h3>
                <p>Ofrecemos tres servicios principales:</p>
                <ul>
                  <li>
                    <strong>Bunker</strong>: Garantizamos un suministro de
                    calidad, eficiente y flexible. Como debería ser cualquier
                    suministro.
                  </li>
                  <li>
                    <strong>Derivados</strong>: ¿Quieres establecer un precio
                    fijo de compra? Ahora puedes. Así sabrás realmente cuánto te
                    gastas en fuel.
                  </li>
                  <li>
                    <strong>Vetting</strong>: Garantizamos la calidad y
                    seguridad de tu buque, tripulación y la protección del medio
                    ambiente.
                  </li>
                </ul>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="button-modal"
                  variant="outline-dark"
                  onClick={handleClose2}
                >
                  Cerrar
                </Button>
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://www.repsol.com/content/dam/repsol-corporate/es/productos-y-servicios/productos/oil-gas-trading/trading-general-terms-conditions-sales-purchases-crude-oil-petroleum-products.pdf"
                >
                  <Button variant="outline-dark">Descargar PDF</Button>
                </a>
              </Modal.Footer>
            </Modal>

            {/* ------------------ Modal 3 ------------------ */}

            <Modal
              show={show3}
              onHide={handleClose3}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Especialidades</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h3>Líneas de producto</h3>
                <p>
                  Tenemos muy presente que los mayores resultados solo se
                  consiguen mediante una precisa definición de los procesos,
                  gestión de los recursos y satisfacción de los clientes como
                  tú. Clientes que buscan para su negocio especialidades
                  pensadas a medida para necesidades muy específicas.
                </p>
                <ul>
                  <li>
                    <strong>Aceites</strong>: Compuestos de calidad óptima
                    válidos para una gran variedad de aplicaciones: neumáticos,
                    tintas, asfaltos, cables... conseguidos gracias a los
                    procesos altamente especializados de nuestras refinerías.
                  </li>
                  <li>
                    <strong>Azufre</strong>: Producimos y comercializamos azufre
                    en diferentes formatos tanto para uso industrial como
                    agrícola.
                  </li>
                  <li>
                    <strong>Ceras, parafina y emulsiones</strong>: Producimos y
                    comercializamos ceras, parafinas y emulsiones procedentes de
                    nuestras refinerías y te ofrecemos un catálogo adaptado a
                    diferentes sectores.
                  </li>
                  <li>
                    <strong>Gases licuados</strong>: Gases Licuados Hidrogenados
                    de Alta Pureza, amigables con el medioambiente, que cumplen
                    con las normativas más exigentes y que tienen la calidad
                    suficiente para adaptarse a tus exigencias en cualquier tipo
                    de aplicación que requiera un producto especial y de alta
                    calidad.
                  </li>
                  <li>
                    <strong>Coque</strong>: El coque combustible que producimos
                    en Repsol te ayudará a aumentar el rendimiento de tu
                    maquinaria industrial y a reducir gastos.
                  </li>
                </ul>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="button-modal"
                  variant="outline-dark"
                  onClick={handleClose3}
                >
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>

            {/* ------------------ Modal 4 ------------------ */}

            <Modal
              show={show4}
              onHide={handleClose4}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Estaciones</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h3>
                  Una empresa global capaz de cuidar hasta el detalle más
                  pequeño
                </h3>
                <p>
                  Ser una de las mayores petroleras privadas del mundo nos ha
                  hecho darnos cuenta de la importancia para los usuarios de las
                  cosas pequeñas. Aquellas que hacen diferentes a nuestras
                  estaciones de servicio y que nos han hecho llegar tan lejos.
                </p>
                <h6>
                  España. Más de 3.500 estaciones servicio con todo lo que
                  necesitas
                </h6>
                <li>
                  Todo nuestro potencial como multinacional innovadora aplicado
                  a los productos y servicios que quieres en tus viajes, ya seas
                  particular o profesional de la carretera: wifi, tiendas,
                  servicio de paquetería, parking seguro, autolavado...
                </li>
                <a href="/">&gt; Ver más sobre España</a>
                <br />
                <br />
                <h6>Portugal. Calidad y confianza en el camino</h6>
                <li>
                  Estos principios, que aplicamos a toda nuestra actividad, se
                  reflejan directamente nuestras estaciones de servicio.
                  Parkings, áreas de descanso, tiendas, servicios, accesos… Todo
                  pensado para hacer tu pausa más cómoda y segura.
                </li>
                <a href="/">&gt; Ver más sobre Portugal</a>
                <br />
                <br />
                <h6>Perú. Todo lo que necesitas en cualquier punto del país</h6>
                <li>
                  Nuestra red de estaciones de servicio, estratégicamente
                  situadas en las principales ciudades, nos permite ofrecerte
                  una amplia gama de servicios como: tiendas, autolavado,
                  cajeros automáticos. Todo de fácil acceso y seguridad
                  permanente.
                </li>
                <a href="/">&gt; Ver más sobre Perú</a>
                <br />
                <br />
                <h6>En México sumamos más estaciones</h6>
                <li>
                  Continuamos creciendo en el país, cada vez con más gasolineras
                  a disposición de nuestros clientes, en las que están presentes
                  los máximos estándares de calidad, confianza y transparencia
                  que caracterizan nuestro servicio.
                </li>
                <a href="/">&gt; Ver más sobre México</a>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="button-modal"
                  variant="outline-dark"
                  onClick={handleClose4}
                >
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>

            {/* ------------------ Modal 5 ------------------ */}

            <Modal
              show={show5}
              onHide={handleClose5}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Butano y propano</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h3>Los diferentes usos del gas Repsol</h3>
                <p>
                  En Repsol, ofrecemos soluciones energéticas eficientes a
                  nuestros clientes ajustándonos a sus necesidades, lo que nos
                  ayuda a ser un actor relevante en todos los sectores de
                  aplicación de los diferentes usos del gas. Ofrecemos
                  soluciones para los siguientes sectores:{" "}
                </p>
                <ul>
                  <li>
                    <strong>El hogar</strong>, donde llevamos el calor
                    inteligente. Te proporcionamos el máximo confort en el lugar
                    en el que siempre te gusta estar, tu casa.{" "}
                  </li>
                  <li>
                    <strong>La hostelería</strong>, donde trabajamos para
                    ofrecer a nuestros clientes una solución energética flexible
                    y cómoda para diferentes usos: desde la cocina hasta las
                    instalaciones de frío-calor.{" "}
                  </li>
                  <li>
                    <strong>La agricultura.</strong> El uso del Gas de Repsol en
                    el sector agrícola es muy relevante para el desarrollo y
                    correcto funcionamiento de diferentes instalaciones como
                    granjas avícolas y porcinas.
                  </li>
                  <li>
                    <strong>La industria.</strong> La versatilidad del Gas de
                    Repsol hace que nuestros productos se adapten a las
                    necesidades de tu negocio.{" "}
                  </li>
                  <li>
                    <strong>El sector servicios.</strong> Con el Gas de Repsol
                    optimizarás tu consumo energético respecto a otros recursos.
                  </li>
                </ul>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="button-modal"
                  variant="outline-dark"
                  onClick={handleClose5}
                >
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>

            {/* ------------------ Modal 6 ------------------ */}

            <Modal
              show={show6}
              onHide={handleClose6}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Gasóleo</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h3>
                  Conoce los diferentes usos de los gasóleos y fuelóleos Repsol
                </h3>
                <p>
                  Carburantes y combustibles que te ayudarán con sus grandes
                  cualidades y la amplia gama de soluciones que te traemos en
                  Repsol con la máxima calidad y confianza. Estamos en todos los
                  sectores, desde la calefacción que te calienta en casa, los
                  aviones en los que viajas o los camiones con los que trabajas:{" "}
                </p>
                <ul>
                  <li>
                    <strong>Residencial. </strong>Nuestro producto BiEnergy e+10
                    te hará disfrutar aún más de estar en tu hogar, porque como
                    en casa, en ningún sitio.
                  </li>
                  <li>
                    <strong>Agro. </strong>La naturaleza es muy importante para
                    Repsol y con AgroDiésel e+10 aumentas el rendimiento y
                    ahorras costes, mientras respetas tu campo.{" "}
                  </li>
                  <li>
                    <strong>Industria. </strong>La solución energética para tu
                    negocio con nuestros mejores productos: Fuelóleos,
                    Tecnodiesel e+10, Diésel e+, Energy e+ y nuestro Coque
                    Verde.{" "}
                  </li>
                  <li>
                    <strong>Marina. </strong>Siente como nunca has sentido
                    navegando con nuestras soluciones. Nuestra gran experiencia
                    en alta mar nos permite ofrecerte los mejores productos para
                    tu embarcación{" "}
                  </li>
                  <li>
                    <strong>Flotas y transportes. </strong>Consigue la máxima
                    rentabilidad con nuestros carburantes para tu negocio de
                    transporte terrestre. Calidad de aquí hasta allí.
                  </li>
                </ul>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="button-modal"
                  variant="outline-dark"
                  onClick={handleClose6}
                >
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>

            {/* ------------------ Modal 7 ------------------ */}

            <Modal
              show={show7}
              onHide={handleClose7}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Luz y gas</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h3>
                  Somos un actor relevante en el mercado español de electricidad
                </h3>
                <p>
                  Repsol se consolida como proveedor multi-energético a nivel
                  mundial y como un actor relevante en luz y gas natural a nivel
                  nacional (España), gracias a sus activos de bajas emisiones
                  con una capacidad de 3.860 megavatios (MW) y una cartera de
                  más de 1,4 millones de clientes.
                </p>
                <h5>¿Cuáles son nuestros activos de bajas emisiones?</h5>
                <ul>
                  <li>
                    <strong>Centrales hidroeléctricas</strong>: Contamos con
                    tres agrupaciones de centrales hidroeléctricas situadas en
                    el norte de España con una capacidad de 700 MW.
                  </li>
                  <li>
                    <strong>Centrales de ciclo combinado:</strong> Trabajamos en
                    dos centrales de ciclo combinado de gas en Algeciras (Cádiz)
                    y en Escatrón (Zaragoza), con una capacidad de 1.650 MW.
                  </li>
                </ul>
                <h5>
                  Reforzamos nuestra actividad como proveedor multienergía
                </h5>
                <p>
                  Con la actualización estratégica a 2020, nos anticipamos a
                  grandes tendencias como el aumento de la demanda de
                  electricidad y el papel clave del gas en la transición
                  energética. <br /> <br />
                  Por eso, la incorporación a nuestra oferta comercial del
                  suministro de electricidad y gas supone un hito fundamental
                  para cumplir nuestra hoja de ruta.
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="button-modal"
                  variant="outline-dark"
                  onClick={handleClose7}
                >
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>

            {/* ------------------ Modal 8 ------------------ */}

            <Modal
              show={show8}
              onHide={handleClose8}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Aviación</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h3>
                  Una completa gama de carburantes para todo tipo de aviones
                </h3>
                <ul>
                  <li>
                    <strong>
                      <a href="https://www.repsol.com/content/dam/repsol-corporate/es/productos-y-servicios/productos/aviacion/propiedades-jet-a1-aviacion.pdf">
                        Jet A-1
                      </a>
                    </strong>
                    : Un combustible que proporciona la máxima potencia al motor
                    gracias a su calidad de combustión y alto poder calorífico.
                    También puede ser utilizado como refrigerante de
                    determinados componentes.
                  </li>
                  <li>
                    <strong>
                      <a href="https://www.repsol.com/content/dam/repsol-corporate/es/productos-y-servicios/productos/aviacion/instrucciones-basicas-operaciones-suministro-combustible-aeronaves-bidones.pdf">
                        Avgas 100LL
                      </a>
                    </strong>
                    : Su capacidad de adaptación a diferentes temperaturas y
                    presiones proporciona mayores niveles de seguridad a los
                    aviones. Es la gasolina adecuada para motores de explosión y
                    de pistón.
                  </li>
                  <li>
                    <strong>
                      <a href="https://www.repsol.com/es/productos-y-servicios/aviacion/jp-8/index.cshtml">
                        JP-8
                      </a>
                    </strong>
                    : El mejor combustible para aviación militar. Nuestro
                    compromiso es mantener la calidad del JP-8, asegurando la
                    ausencia de contaminación con otros combustibles.
                  </li>
                </ul>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="button-modal"
                  variant="outline-dark"
                  onClick={handleClose8}
                >
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>

            {/* ------------------ Modal 9 ------------------ */}

            <Modal
              show={show9}
              onHide={handleClose9}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Asfaltos</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h3>Nuevos horizontes para el asfalto</h3>
                <p>
                  Los científicos del Repsol Technology Lab trabajan en todos
                  los aspectos relacionados con nuestro negocio, también en la
                  mejora y optimización de los asfaltos. Hemos creado proyectos
                  que han dado como resultado asfaltos más eficientes, más
                  duraderos y que además podemos reciclar para mantener la
                  sostenibilidad de este bien tan escaso.
                </p>
                <h5>Más sostenibilidad</h5>
                <p>
                  En Repsol trabajamos para proporcionar a la sociedad las
                  mejores infraestructuras con respeto al medio ambiente. Por
                  eso, aplicamos todo nuestro potencial innovador en desarrollar
                  soluciones "verdes" en la industria del asfalto.
                </p>
                <ul>
                  <li>Carreteras seguras y más duraderas</li>
                  <li>Mejora de las prestaciones en su aplicación</li>
                  <li>Ecoeficiencia como motor de desarrollo</li>
                  <li>La impermeabilización como garantía</li>
                </ul>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="button-modal"
                  variant="outline-dark"
                  onClick={handleClose9}
                >
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>

            {/* ------------------ Modal 10 ------------------ */}

            <Modal
              show={show10}
              onHide={handleClose10}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Lubricantes</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h3>De la alta competición a tu motor</h3>
                <p>
                  Desarrollamos una de las gamas de lubricantes para vehículos
                  pesados más versátil del mercado. Una única marca con
                  productos para diferentes usos pensada para dar el poder a los
                  profesionales.
                </p>
                <h5>Lubricantes Repsol para coches</h5>
                <p>
                  Formulados con la tecnología más avanzada para los motores más
                  exigentes. Ofrecen las máximas prestaciones en protección y
                  eficiencia, y han sido homologados por los principales
                  fabricantes.
                </p>
                <h5>Lubricantes Repsol para motos</h5>
                <p>
                  Los lubricantes de Repsol son la mejor opción para tu moto.
                  Ensayados en la alta competición, te garantizan el mejor
                  rendimiento y protección para tu motor, ofreciendo las mejores
                  prestaciones y el más alto nivel de eficiencia.
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="button-modal"
                  variant="outline-dark"
                  onClick={handleClose10}
                >
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>

        <div className="container-gasoline">
          <h2>Nuestros carburantes</h2>
          <p>
            Tenemos una amplia gama de carburantes que ofrecer a nuestros
            clientes, siempre disponibles en nuestras estaciones de servicio,
            optimizando la calidad y la eficiencia de cada combustible para
            alargar al máximo su vida útil.
          </p>
        </div>

        <div className="container-gasoline-cards">
          <div className="gasoline">
            <div className="gasoline-img">
              <img className="gasoline-placeholder" src={g95} alt="95" />
            </div>
            <div className="gasoline-text">
              <h5>Gasolina E5 95 - E10 95</h5>
              <hr className="hr-gas" />
              <p>
                Hoy en día, la sin plomo 95 es una gasolina con los mismos
                estándares de calidad que la de 98 octanos, por lo que si
                nuestro coche es un turismo convencional la de 95 no solo es la
                más recomendada, sino que además ayuda a reducir el consumo.
                <span className="text-display">
                  Limita las emisiones de partículas contaminantes. En el caso
                  de Efitec, contamos con una versión premium de la 95 que
                  proporciona mayor rendimiento.
                </span>
              </p>
            </div>
          </div>

          <div className="gasoline">
            <div className="gasoline-img">
              <img className="gasoline-placeholder" src={g98} alt="98" />
            </div>
            <div className="gasoline-text">
              <h5>Gasolina E5 98 - E10 98</h5>
              <hr className="hr-gas" />
              <p>
                Para Repsol ofrecer productos respetuosos con el medio ambiente
                es una prioridad, por eso la gasolina Efitec 98 es la que menor
                cantidad de azufre posee en el mercado. El crecimiento de Repsol
                se orienta a satisfacer las necesidades de los usuarios.{" "}
                <span className="text-display">
                  Esto, sin que se perjudique el entorno, la seguridad y el
                  medio ambiente. Efitec 98 es la gasolina con el menor
                  contenido de azufre en el mercado (menor a 50 ppm wt ó 0.005 %
                  masa).
                </span>
              </p>
            </div>
          </div>

          <div className="gasoline">
            <div className="gasoline-img">
              <img className="gasoline-placeholder" src={d1} alt="e+" />
            </div>
            <div className="gasoline-text">
              <h5>Diesel e+</h5>
              <hr className="hr-gas" />
              <p>
                Descubre todas sus ventajas y cómo actúa sobre los diferentes
                sistemas del vehículo: En Repsol concentramos esfuerzos en la
                formulación de nuestros combustibles. Ahora producimos el nuevo
                Diésel e+.{" "}
                <span className="text-display">
                  Ofrece 4 ventajas diferenciales:
                  <li>Máxima calidad y formulación exclusiva</li>
                  <li>Mayor protección y vida a tu motor</li>
                  <li>La garantía de una marca líder</li>
                </span>
              </p>
            </div>
          </div>

          <div className="gasoline" id="gasoline-4">
            <div className="gasoline-img">
              <img className="gasoline-placeholder" src={d2} alt="10 e+" />
            </div>
            <div className="gasoline-text">
              <h5>Diesel 10 e+</h5>
              <hr className="hr-gas" />
              <p>
                Una nueva forma de ver la conducción es posible. Aprovecha las
                prestaciones máximas del motor, es el gasóleo de más alta gama
                del mercado diseñado para todos los motores diésel,
                especialmente los de última generación.{" "}
                <span className="text-display">
                  {" "}
                  Gracias a un elevado número de Cetano se consigue:
                  <li>Una ignición más rápida</li>
                  <li>Mejor arranque en frío</li>
                  <li>Más confort en la conducción</li>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="cta">
          <h3>¿Aún no tienes cuenta de cliente con nosotros?</h3>
          <div className="buttons-two-cta">
            <Button variant="outline-light" className="button-cta-one">
              <Link to={"/"} className="link-main">
                Regístrate
              </Link>
            </Button>
            <Button variant="outline-light" className="button-cta-two">
              <Link to={"/"} className="link-main">
                Contáctanos
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
