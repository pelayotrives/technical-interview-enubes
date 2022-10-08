import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import News from '../assets/news.jpg'
import Events from '../assets/events.jpg'
import Stocks from '../assets/stocks.jpg'
import Info from '../assets/information.jpg'
import { Link } from "react-router-dom";

export default function Cards() {
  return (
    <div className="container-cards">
      <div className="card-one">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={News} />
          <Card.Body>
            <Card.Title>Últimas noticias</Card.Title>
            <Card.Subtitle className="mb-2 text-muted small">07/10/2022</Card.Subtitle>
            <Card.Text>
                Repsol e Impulsa Galicia
            </Card.Text>
            <Button variant="outline-dark"><Link to={"/catalogo"} className="link">Ver más</Link></Button>
          </Card.Body>
        </Card>
      </div>
      <div className="card-two">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Events} />
          <Card.Body>
            <Card.Title>Eventos</Card.Title>
            <Card.Subtitle className="mb-2 text-muted small">21/10/2022</Card.Subtitle>
            <Card.Text>
                Trading Statement 3T
            </Card.Text>
            <Button variant="outline-dark"><Link to={"/catalogo"} className="link">Ver más</Link></Button>
          </Card.Body>
        </Card>
      </div>
      <div className="card-three">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Info} />
          <Card.Body>
            <Card.Title>Información semestral</Card.Title>
            <Card.Subtitle className="mb-2 text-muted small">2022</Card.Subtitle>
            <Card.Text>
                Informe de gestión intermedio
            </Card.Text>
            <Button variant="outline-dark"><Link to={"/catalogo"} className="link">Ver más</Link></Button>
          </Card.Body>
        </Card>
      </div>
      <div className="card-four">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Stocks} />
          <Card.Body>
            <Card.Title>Cotización</Card.Title>
            <Card.Subtitle className="mb-2 text-muted small">07/10/2022</Card.Subtitle>
            <Card.Text>
              12.68%
            </Card.Text>
            <Button variant="outline-dark"><Link to={"/catalogo"} className="link">Ver más</Link></Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
