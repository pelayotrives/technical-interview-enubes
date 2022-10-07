import React, { useState } from "react";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import i1 from "../assets/i1.svg";
import i2 from "../assets/i2.png";
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
                    mejoran tu calidad de vida, tu bienestar y, sobre todo, tu seguridad.
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
                    que suministramos nuestras soluciones e innovadores productos.
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
                I will not close if you click outside me. Don't even try to
                press escape key.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose1}>
                  Close
                </Button>
                <Button variant="primary">Understood</Button>
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
                I will not close if you click outside me. Don't even try to
                press escape key.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose2}>
                  Close
                </Button>
                <Button variant="primary">Understood</Button>
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
                I will not close if you click outside me. Don't even try to
                press escape key.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose3}>
                  Close
                </Button>
                <Button variant="primary">Understood</Button>
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
                I will not close if you click outside me. Don't even try to
                press escape key.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose4}>
                  Close
                </Button>
                <Button variant="primary">Understood</Button>
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
                I will not close if you click outside me. Don't even try to
                press escape key.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose5}>
                  Close
                </Button>
                <Button variant="primary">Understood</Button>
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
                I will not close if you click outside me. Don't even try to
                press escape key.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose6}>
                  Close
                </Button>
                <Button variant="primary">Understood</Button>
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
                I will not close if you click outside me. Don't even try to
                press escape key.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose7}>
                  Close
                </Button>
                <Button variant="primary">Understood</Button>
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
                I will not close if you click outside me. Don't even try to
                press escape key.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose8}>
                  Close
                </Button>
                <Button variant="primary">Understood</Button>
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
                I will not close if you click outside me. Don't even try to
                press escape key.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose9}>
                  Close
                </Button>
                <Button variant="primary">Understood</Button>
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
                I will not close if you click outside me. Don't even try to
                press escape key.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose10}>
                  Close
                </Button>
                <Button variant="primary">Understood</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
