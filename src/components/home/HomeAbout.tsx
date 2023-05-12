import "../../assets/styles/home/HomeAbStyle.css";
import image from "/img/bg-header3.webp";
import { ListGroup } from "react-bootstrap";

const HomeAbout = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="section-title text-center center">
          <h2>Sobre Nosotros</h2>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img style={{height: 'auto', width: 'auto'}} src={image} alt="anonymous" />
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

              <h4 className="tittle"><b>Nos especializamos en los siguientes servicios</b></h4>
              
              <ListGroup className="list" variant="flush" id="Lista">
                <ListGroup.Item  id="list_Group">
                <li>Diseño de Pagina Web RESPONSIVE DESIGN adaptable a cualquier dispositivo (celular, tablets, ordenadores).</li>
                <li>Activacion de Windows, Office y diferentes programas.</li>
                <li>Modificacion de Aplicaciones SO Android.</li>
                <li>Cualquier tipo de Suscripción.</li>
                <li>Videojuegos de Xbox y PC.</li>
                <li>Soluciones TI.</li>
                </ListGroup.Item>
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

export default HomeAbout;
