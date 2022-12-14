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
            <h1>Soluciones para facilitar tu d??a a d??a</h1>
            <p>
              Para el hogar, la carretera, tu empresa o industria, la
              agricultura, marina o aviaci??n. <br /> Te ofrecemos multitud de
              soluciones en funci??n de tus necesidades.
            </p>
          </div>
        </div>
        <div className="container-modals">
          <div className="container-modals-info">
            <h2>Nuestros servicios</h2>
            <p>
              Cada uno de los productos y servicios que desarrollamos desde
              Repsol cuenta con la m??xima calidad, la mayor seguridad y la m??s
              alta innovaci??n.
            </p>
          </div>
          <div className="container-modals-main">
            <div className="modal-opener-1">
              <button onClick={handleShow1}>
                <div className="modal-opener-body">
                  <img className="modal-logo" src={i1} alt="Logo 1" />
                  <h5>Qu??mica</h5>
                  <p>
                    Tu vida est?? llena de qu??mica. Productos cotidianos que
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
                    internacionalmente la materia prima m??s usada.
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
                    Ponemos a tu disposici??n nuestros recursos, procesos e
                    innovaci??n para cubrir necesidades a trav??s de nuestros
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
                    M??s de 4700 estaciones de servicio con servicios de alta
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
                    Una soluci??n energ??tica tanto para el confort de tu hogar,
                    la eficiencia de la cocina o el ??ptimo funcionamiento de tu
                    negocio.
                  </p>
                </div>
              </button>
            </div>

            <div className="modal-opener-6">
              <button onClick={handleShow6}>
                <div className="modal-opener-body">
                  <img className="modal-logo" src={i6} alt="Logo 6" />
                  <h5>Gas??leo</h5>
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
                    hogar. Empieza a ahorrar ahora mismo con la garant??a de
                    Repsol.
                  </p>
                </div>
              </button>
            </div>

            <div className="modal-opener-8">
              <button onClick={handleShow8}>
                <div className="modal-opener-body">
                  <img className="modal-logo" src={i8} alt="Logo 8" />
                  <h5>Aviaci??n</h5>
                  <p>
                    Carburantes para las demandas m??s exigentes. Formaci??n y
                    asesor??a t??cnica como complemento para nuestro servicio.
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
                    Aplicamos nuestros conocimientos en la alta competici??n en
                    todos los productos. Cuidamos tu motor al m??ximo.
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
                <Modal.Title>Qu??mica</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h3>Los productos de tu d??a a d??a</h3>
                <p>
                  En lo que respecta a la petroqu??mica b??sica producimos
                  mon??meros como etileno, propileno, benceno, butadieno y otros
                  productos que son la base de la petroqu??mica derivada.
                  <br />
                  <br />
                  Debido al alto nivel de integraci??n de la compa????a, la gran
                  mayor??a de estas materias primas se destina a la fabricaci??n
                  de productos derivados de Repsol y el resto se comercializa.
                  <br />
                  <br />
                  Nuestra qu??mica derivada, incluye productos intermedios y
                  poliolefinas. Entre los primeros se encuentran el estireno,
                  ??xido de propileno, polioles poli??ter y glicoles propil??nicos.
                  En cuanto a las poliolefinas, los pl??sticos m??s conocidos,
                  re??nen una amplia combinaci??n de propiedades como
                  flexibilidad, resistencia, bajo peso, estabilidad,
                  impermeabilidad y f??cil esterilizaci??n.
                  <br />
                  <br />
                  Esta combinaci??n ha propiciado el ??xito de estos materiales al
                  convertirse en el material preferido e id??neo para una gran
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
                <h3>Trading: petr??leo global</h3>
                <p>Ofrecemos tres servicios principales:</p>
                <ul>
                  <li>
                    <strong>Bunker</strong>: Garantizamos un suministro de
                    calidad, eficiente y flexible. Como deber??a ser cualquier
                    suministro.
                  </li>
                  <li>
                    <strong>Derivados</strong>: ??Quieres establecer un precio
                    fijo de compra? Ahora puedes. As?? sabr??s realmente cu??nto te
                    gastas en fuel.
                  </li>
                  <li>
                    <strong>Vetting</strong>: Garantizamos la calidad y
                    seguridad de tu buque, tripulaci??n y la protecci??n del medio
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
                <h3>L??neas de producto</h3>
                <p>
                  Tenemos muy presente que los mayores resultados solo se
                  consiguen mediante una precisa definici??n de los procesos,
                  gesti??n de los recursos y satisfacci??n de los clientes como
                  t??. Clientes que buscan para su negocio especialidades
                  pensadas a medida para necesidades muy espec??ficas.
                </p>
                <ul>
                  <li>
                    <strong>Aceites</strong>: Compuestos de calidad ??ptima
                    v??lidos para una gran variedad de aplicaciones: neum??ticos,
                    tintas, asfaltos, cables... conseguidos gracias a los
                    procesos altamente especializados de nuestras refiner??as.
                  </li>
                  <li>
                    <strong>Azufre</strong>: Producimos y comercializamos azufre
                    en diferentes formatos tanto para uso industrial como
                    agr??cola.
                  </li>
                  <li>
                    <strong>Ceras, parafina y emulsiones</strong>: Producimos y
                    comercializamos ceras, parafinas y emulsiones procedentes de
                    nuestras refiner??as y te ofrecemos un cat??logo adaptado a
                    diferentes sectores.
                  </li>
                  <li>
                    <strong>Gases licuados</strong>: Gases Licuados Hidrogenados
                    de Alta Pureza, amigables con el medioambiente, que cumplen
                    con las normativas m??s exigentes y que tienen la calidad
                    suficiente para adaptarse a tus exigencias en cualquier tipo
                    de aplicaci??n que requiera un producto especial y de alta
                    calidad.
                  </li>
                  <li>
                    <strong>Coque</strong>: El coque combustible que producimos
                    en Repsol te ayudar?? a aumentar el rendimiento de tu
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
                  Una empresa global capaz de cuidar hasta el detalle m??s
                  peque??o
                </h3>
                <p>
                  Ser una de las mayores petroleras privadas del mundo nos ha
                  hecho darnos cuenta de la importancia para los usuarios de las
                  cosas peque??as. Aquellas que hacen diferentes a nuestras
                  estaciones de servicio y que nos han hecho llegar tan lejos.
                </p>
                <h6>
                  Espa??a. M??s de 3.500 estaciones servicio con todo lo que
                  necesitas
                </h6>
                <li>
                  Todo nuestro potencial como multinacional innovadora aplicado
                  a los productos y servicios que quieres en tus viajes, ya seas
                  particular o profesional de la carretera: wifi, tiendas,
                  servicio de paqueter??a, parking seguro, autolavado...
                </li>
                <a href="/">&gt; Ver m??s sobre Espa??a</a>
                <br />
                <br />
                <h6>Portugal. Calidad y confianza en el camino</h6>
                <li>
                  Estos principios, que aplicamos a toda nuestra actividad, se
                  reflejan directamente nuestras estaciones de servicio.
                  Parkings, ??reas de descanso, tiendas, servicios, accesos??? Todo
                  pensado para hacer tu pausa m??s c??moda y segura.
                </li>
                <a href="/">&gt; Ver m??s sobre Portugal</a>
                <br />
                <br />
                <h6>Per??. Todo lo que necesitas en cualquier punto del pa??s</h6>
                <li>
                  Nuestra red de estaciones de servicio, estrat??gicamente
                  situadas en las principales ciudades, nos permite ofrecerte
                  una amplia gama de servicios como: tiendas, autolavado,
                  cajeros autom??ticos. Todo de f??cil acceso y seguridad
                  permanente.
                </li>
                <a href="/">&gt; Ver m??s sobre Per??</a>
                <br />
                <br />
                <h6>En M??xico sumamos m??s estaciones</h6>
                <li>
                  Continuamos creciendo en el pa??s, cada vez con m??s gasolineras
                  a disposici??n de nuestros clientes, en las que est??n presentes
                  los m??ximos est??ndares de calidad, confianza y transparencia
                  que caracterizan nuestro servicio.
                </li>
                <a href="/">&gt; Ver m??s sobre M??xico</a>
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
                  En Repsol, ofrecemos soluciones energ??ticas eficientes a
                  nuestros clientes ajust??ndonos a sus necesidades, lo que nos
                  ayuda a ser un actor relevante en todos los sectores de
                  aplicaci??n de los diferentes usos del gas. Ofrecemos
                  soluciones para los siguientes sectores:{" "}
                </p>
                <ul>
                  <li>
                    <strong>El hogar</strong>, donde llevamos el calor
                    inteligente. Te proporcionamos el m??ximo confort en el lugar
                    en el que siempre te gusta estar, tu casa.{" "}
                  </li>
                  <li>
                    <strong>La hosteler??a</strong>, donde trabajamos para
                    ofrecer a nuestros clientes una soluci??n energ??tica flexible
                    y c??moda para diferentes usos: desde la cocina hasta las
                    instalaciones de fr??o-calor.{" "}
                  </li>
                  <li>
                    <strong>La agricultura.</strong> El uso del Gas de Repsol en
                    el sector agr??cola es muy relevante para el desarrollo y
                    correcto funcionamiento de diferentes instalaciones como
                    granjas av??colas y porcinas.
                  </li>
                  <li>
                    <strong>La industria.</strong> La versatilidad del Gas de
                    Repsol hace que nuestros productos se adapten a las
                    necesidades de tu negocio.{" "}
                  </li>
                  <li>
                    <strong>El sector servicios.</strong> Con el Gas de Repsol
                    optimizar??s tu consumo energ??tico respecto a otros recursos.
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
                <Modal.Title>Gas??leo</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h3>
                  Conoce los diferentes usos de los gas??leos y fuel??leos Repsol
                </h3>
                <p>
                  Carburantes y combustibles que te ayudar??n con sus grandes
                  cualidades y la amplia gama de soluciones que te traemos en
                  Repsol con la m??xima calidad y confianza. Estamos en todos los
                  sectores, desde la calefacci??n que te calienta en casa, los
                  aviones en los que viajas o los camiones con los que trabajas:{" "}
                </p>
                <ul>
                  <li>
                    <strong>Residencial. </strong>Nuestro producto BiEnergy e+10
                    te har?? disfrutar a??n m??s de estar en tu hogar, porque como
                    en casa, en ning??n sitio.
                  </li>
                  <li>
                    <strong>Agro. </strong>La naturaleza es muy importante para
                    Repsol y con AgroDi??sel e+10 aumentas el rendimiento y
                    ahorras costes, mientras respetas tu campo.{" "}
                  </li>
                  <li>
                    <strong>Industria. </strong>La soluci??n energ??tica para tu
                    negocio con nuestros mejores productos: Fuel??leos,
                    Tecnodiesel e+10, Di??sel e+, Energy e+ y nuestro Coque
                    Verde.{" "}
                  </li>
                  <li>
                    <strong>Marina. </strong>Siente como nunca has sentido
                    navegando con nuestras soluciones. Nuestra gran experiencia
                    en alta mar nos permite ofrecerte los mejores productos para
                    tu embarcaci??n{" "}
                  </li>
                  <li>
                    <strong>Flotas y transportes. </strong>Consigue la m??xima
                    rentabilidad con nuestros carburantes para tu negocio de
                    transporte terrestre. Calidad de aqu?? hasta all??.
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
                  Somos un actor relevante en el mercado espa??ol de electricidad
                </h3>
                <p>
                  Repsol se consolida como proveedor multi-energ??tico a nivel
                  mundial y como un actor relevante en luz y gas natural a nivel
                  nacional (Espa??a), gracias a sus activos de bajas emisiones
                  con una capacidad de 3.860 megavatios (MW) y una cartera de
                  m??s de 1,4 millones de clientes.
                </p>
                <h5>??Cu??les son nuestros activos de bajas emisiones?</h5>
                <ul>
                  <li>
                    <strong>Centrales hidroel??ctricas</strong>: Contamos con
                    tres agrupaciones de centrales hidroel??ctricas situadas en
                    el norte de Espa??a con una capacidad de 700 MW.
                  </li>
                  <li>
                    <strong>Centrales de ciclo combinado:</strong> Trabajamos en
                    dos centrales de ciclo combinado de gas en Algeciras (C??diz)
                    y en Escatr??n (Zaragoza), con una capacidad de 1.650 MW.
                  </li>
                </ul>
                <h5>
                  Reforzamos nuestra actividad como proveedor multienerg??a
                </h5>
                <p>
                  Con la actualizaci??n estrat??gica a 2020, nos anticipamos a
                  grandes tendencias como el aumento de la demanda de
                  electricidad y el papel clave del gas en la transici??n
                  energ??tica. <br /> <br />
                  Por eso, la incorporaci??n a nuestra oferta comercial del
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
                <Modal.Title>Aviaci??n</Modal.Title>
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
                    : Un combustible que proporciona la m??xima potencia al motor
                    gracias a su calidad de combusti??n y alto poder calor??fico.
                    Tambi??n puede ser utilizado como refrigerante de
                    determinados componentes.
                  </li>
                  <li>
                    <strong>
                      <a href="https://www.repsol.com/content/dam/repsol-corporate/es/productos-y-servicios/productos/aviacion/instrucciones-basicas-operaciones-suministro-combustible-aeronaves-bidones.pdf">
                        Avgas 100LL
                      </a>
                    </strong>
                    : Su capacidad de adaptaci??n a diferentes temperaturas y
                    presiones proporciona mayores niveles de seguridad a los
                    aviones. Es la gasolina adecuada para motores de explosi??n y
                    de pist??n.
                  </li>
                  <li>
                    <strong>
                      <a href="https://www.repsol.com/es/productos-y-servicios/aviacion/jp-8/index.cshtml">
                        JP-8
                      </a>
                    </strong>
                    : El mejor combustible para aviaci??n militar. Nuestro
                    compromiso es mantener la calidad del JP-8, asegurando la
                    ausencia de contaminaci??n con otros combustibles.
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
                  Los cient??ficos del Repsol Technology Lab trabajan en todos
                  los aspectos relacionados con nuestro negocio, tambi??n en la
                  mejora y optimizaci??n de los asfaltos. Hemos creado proyectos
                  que han dado como resultado asfaltos m??s eficientes, m??s
                  duraderos y que adem??s podemos reciclar para mantener la
                  sostenibilidad de este bien tan escaso.
                </p>
                <h5>M??s sostenibilidad</h5>
                <p>
                  En Repsol trabajamos para proporcionar a la sociedad las
                  mejores infraestructuras con respeto al medio ambiente. Por
                  eso, aplicamos todo nuestro potencial innovador en desarrollar
                  soluciones "verdes" en la industria del asfalto.
                </p>
                <ul>
                  <li>Carreteras seguras y m??s duraderas</li>
                  <li>Mejora de las prestaciones en su aplicaci??n</li>
                  <li>Ecoeficiencia como motor de desarrollo</li>
                  <li>La impermeabilizaci??n como garant??a</li>
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
                <h3>De la alta competici??n a tu motor</h3>
                <p>
                  Desarrollamos una de las gamas de lubricantes para veh??culos
                  pesados m??s vers??til del mercado. Una ??nica marca con
                  productos para diferentes usos pensada para dar el poder a los
                  profesionales.
                </p>
                <h5>Lubricantes Repsol para coches</h5>
                <p>
                  Formulados con la tecnolog??a m??s avanzada para los motores m??s
                  exigentes. Ofrecen las m??ximas prestaciones en protecci??n y
                  eficiencia, y han sido homologados por los principales
                  fabricantes.
                </p>
                <h5>Lubricantes Repsol para motos</h5>
                <p>
                  Los lubricantes de Repsol son la mejor opci??n para tu moto.
                  Ensayados en la alta competici??n, te garantizan el mejor
                  rendimiento y protecci??n para tu motor, ofreciendo las mejores
                  prestaciones y el m??s alto nivel de eficiencia.
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
            alargar al m??ximo su vida ??til.
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
                Hoy en d??a, la sin plomo 95 es una gasolina con los mismos
                est??ndares de calidad que la de 98 octanos, por lo que si
                nuestro coche es un turismo convencional la de 95 no solo es la
                m??s recomendada, sino que adem??s ayuda a reducir el consumo.
                <span className="text-display">
                  Limita las emisiones de part??culas contaminantes. En el caso
                  de Efitec, contamos con una versi??n premium de la 95 que
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
                  contenido de azufre en el mercado (menor a 50 ppm wt ?? 0.005 %
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
                Descubre todas sus ventajas y c??mo act??a sobre los diferentes
                sistemas del veh??culo: En Repsol concentramos esfuerzos en la
                formulaci??n de nuestros combustibles. Ahora producimos el nuevo
                Di??sel e+.{" "}
                <span className="text-display">
                  Ofrece 4 ventajas diferenciales:
                  <li>M??xima calidad y formulaci??n exclusiva</li>
                  <li>Mayor protecci??n y vida a tu motor</li>
                  <li>La garant??a de una marca l??der</li>
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
                Una nueva forma de ver la conducci??n es posible. Aprovecha las
                prestaciones m??ximas del motor, es el gas??leo de m??s alta gama
                del mercado dise??ado para todos los motores di??sel,
                especialmente los de ??ltima generaci??n.{" "}
                <span className="text-display">
                  {" "}
                  Gracias a un elevado n??mero de Cetano se consigue:
                  <li>Una ignici??n m??s r??pida</li>
                  <li>Mejor arranque en fr??o</li>
                  <li>M??s confort en la conducci??n</li>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="cta">
          <h3>??A??n no tienes cuenta de cliente con nosotros?</h3>
          <div className="buttons-two-cta">
            <Button variant="outline-light" className="button-cta-one">
              <Link to={"/"} className="link-main">
                Reg??strate
              </Link>
            </Button>
            <Button variant="outline-light" className="button-cta-two">
              <Link to={"/"} className="link-main">
                Cont??ctanos
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
