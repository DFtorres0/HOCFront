import "../../assets/styles/home/homeAbStyle.css";
import image from "../../assets/img/bg-header3.jpeg";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="section-title text-center center">
          <h2>Sobre Nosotros👽</h2>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src={image} className="img-responsive" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <p>
                Ponemos a dispocicion diferentes soluciones tecnologicas como es
                el diseño de paginas web o desarrollo web, aplicaciones
                modificadas , diseño de aplicaciones para diferentes
                plataformas, trabajamos FRONT-END,tenemos conocimiento en los
                ultimos legunajes de programacion, ultimas tecnologia entre
                otros servicios.
              </p>

              <h4>Nos especializamos en los siguientes servicios</h4>
              
              <ListGroup className="list" variant="flush">
                <ListGroup.Item variant="dark">Diseño de Pagina Web RESPONSIVE DESIGN adaptable a cualquier dispositivo (celular, tablets, ordenadores).</ListGroup.Item>
                <ListGroup.Item variant="dark">Activacion de Windows, Office y diferentes programas.</ListGroup.Item>
                <ListGroup.Item variant="dark">Modificacion de Aplicaciones SO Android.</ListGroup.Item>
                <ListGroup.Item variant="dark">Cualquier tipo de Suscripción.</ListGroup.Item>
                <ListGroup.Item variant="dark">Videojuegos de Xbox y PC.</ListGroup.Item>
                <ListGroup.Item variant="dark">Soluciones TI.</ListGroup.Item>
              </ListGroup>
              <a
                href="#portfolio"
                className="btn btn-default btn-lg page-scroll"
              >
                Mi Portafolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
