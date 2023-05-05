import "../../../assets/styles/indexmax/ClassMaxS.css";
import "../../../assets/styles/tutorials/TutorialsBodyS.css";
import { DiIllustrator, DiPhotoshop, DiAngularSimple } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { Card, Button, Container} from "react-bootstrap";
import { useState } from "react";

const Curso = [
  {
    id: 0, title: "Aprende hoy mismo React",
    text: "El nuevo framework mas utilizado en el mundo descubre todo lo que puedes hacer! Un mundo de oportunidades 🌐",
    icon: <DiIllustrator className="my-iconT-1" />,
    image: <img src="/images/img_1.webp" alt="computador 1" className="image-T" />,
    image1: <img src="/images/img_1_horizontal.webp" alt="computador 1" className="image-T-1" />
  },
  {
    id: 1, title: "Aprende hoy mismo Angular 💎",
    text: "Las empresas mas grandes de la industria Tech usan Angular. Para aprender hay que emprender ! Comienza hoy mismo ha cambiar el mundo 🌎",
    icon: <DiPhotoshop className="my-iconT-1" />,
    image: <img src="/images/img_2.webp" alt="computador 1" className="image-T" />,
    image1: <img src="/images/img_2_horizontal.webp" alt="computador 1" className="image-T-1" />
  },
  {
    id: 2, title: "Aprende hoy mismo Photoshop",
    text: "Si quieres aprender a dominar el 100% del FRONT-END , utliza herramientas como Photoshop Para modificar y hacer tus propias imagenes logos, iconos, banners etc.",
    icon: <DiAngularSimple className="my-iconT-1" />,
    image: <img src="/images/img_3.webp" alt="computador 1" className="image-T" />,
    image1: <img src="/images/img_3_horizontal.webp" alt="computador 1" className="image-T-1" />
  },
  {
    id: 3, title: "Aprende hoy mismo Illustrator",
    text: "Hecha a volvar tu imaginacion! y vectoriza crea modifica tus imagenes en diferentes formatos integralas a tus proyectos. Y RECUERDA TODO ENTRA POR LOS OJOS 👁",
    icon: <SiJavascript className="my-iconT-1" />,
    image: <img src="/images/img_4.webp" alt="computador 1" className="image-T" />,
    image1: <img src="/images/img_4_horizontal.webp" alt="computador 1" className="image-T-1" />
  },
];

interface courseInterface {
  id: number;
  title: string;
  text: string;
  icon: JSX.Element;
  image: JSX.Element;
  image1: JSX.Element;
}

const TutorialsBody = () => {
  const [courses, setCourses] = useState<courseInterface[]>([...Curso]);
  return (
    <div>
      <div >
        <div
          style={{
            marginTop: "10%",
          }}
        >
          <h5 className="my-textT">APRENDE HOY! </h5>
          <h2 className="my-text">Tutorias, Clases y Practicas</h2>
        </div >
      </div>
      {courses.map((Curso, CursoIndex) => (
        <div className="d-flex flex-row" key={CursoIndex}>
          <Card className=" d-flex flex-row cardT">
            {Curso.image}
            <Card.Body className="d-flex flex-column  " style={{ textAlign: 'left' }}>
              <Card.Title>{Curso.title}</Card.Title>
              <Card.Text>
                {Curso.text}
                <Container className="h6">
                  {Curso.icon}
                </Container>
                <Container className="T1 h6">Avanzado - abr 28, 2021</Container>
              </Card.Text>
              <Button variant="primary">QUIERO APRENDER HOY!</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem', height: '18rem', marginLeft: '130px' }} className=" d-flex flex-row">
            <Card.Body>
              {Curso.image1}
              <Card.Title style={{ textAlign: 'center', marginTop: '30px' }}>{Curso.title}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      ))}
      <nav aria-label="...">
        <ul className="pagination pagination-sm">
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default TutorialsBody;
