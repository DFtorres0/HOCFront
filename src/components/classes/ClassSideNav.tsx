import { Col, Container, ListGroup, Nav, Row } from "react-bootstrap";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import "../../assets/styles/classes/ClassesSNavStyle.css";
import { useState } from "react";

const courseContent = [
  [
    [
      {
        courseITitle: "Item title 1",
        resources: {
          video: {},
          codeApi: "",
        },
      },
    ],
    [
      {
        courseITitle: "Item title 2",
        resources: {
          video: {},
          codeApi: "",
        },
      },
    ],
    [
      {
        courseITitle: "Item title 3",
        resources: {
          video: {},
          codeApi: "",
        },
      },
    ],
    [
      {
        courseITitle: "Item title 4",
        resources: {
          video: {},
          codeApi: "",
        },
      },
    ],
  ],
  [
    [
      {
        courseITitle: "Item title 1",
        resources: {
          video: {},
          codeApi: "",
        },
      },
    ],
    [
      {
        courseITitle: "Item title 2",
        resources: {
          video: {},
          codeApi: "",
        },
      },
    ],
    [
      {
        courseITitle: "Item title 3",
        resources: {
          video: {},
          codeApi: "",
        },
      },
    ],
  ],
  [
    [
      {
        courseITitle: "Item title 1",
        resources: {
          video: {},
          codeApi: "",
        },
      },
    ],
    [
      {
        courseITitle: "Item title 2",
        resources: {
          video: {},
          codeApi: "",
        },
      },
    ],
    [
      {
        courseITitle: "Item title 3",
        resources: {
          video: {},
          codeApi: "",
        },
      },
    ],
    [
      {
        courseITitle: "Item title 4",
        resources: {
          video: {},
          codeApi: "",
        },
      },
    ],
  ],
  [
    [
      {
        courseITitle: "Item title 1",
        resources: {
          video: {},
          codeApi: "",
        },
      },
    ],
    [
      {
        courseITitle: "Item title 2",
        resources: {
          video: {},
          codeApi: "",
        },
      },
    ],
    [
      {
        courseITitle: "Item title 3",
        resources: {
          video: {},
          codeApi: "",
        },
      },
    ],
    [
      {
        courseITitle: "Item title 4",
        resources: {
          video: {},
          codeApi: "",
        },
      },
    ],
    [
      {
        courseITitle: "Item title 5",
        resources: {
          video: {},
          codeApi: "",
        },
      },
    ],
  ],
  [
    [
      {
        courseITitle: "Item title 1",
        resources: {
          video: {},
          codeApi: "",
        },
      },
    ],
    [
      {
        courseITitle: "Item title 2",
        resources: {
          video: {},
          codeApi: "",
        },
      },
    ],
    [
      {
        courseITitle: "Item title 3",
        resources: {
          video: {},
          codeApi: "",
        },
      },
    ],
  ],
  [
    [
      {
        courseITitle: "Item title 1",
        resources: {
          video: {},
          codeApi: "",
        },
      },
    ],
    [
      {
        courseITitle: "Item title 3",
        resources: {
          video: {},
          codeApi: "",
        },
      },
    ],
  ],
];

const ClassSideNav = ({hijoapadre}: {hijoapadre: Lessons}) => {
  const [navClass, setNavClass] = useState("close");

  const handleToggleNav = () => {
    if (navClass === "") {
      setNavClass("close");
    } else {
      setNavClass("");
    }
  };

  return (
    <div id="snav">
      <Nav className={`sidebar ${navClass}`}>
        <Container className="header">
          <Col onClick={handleToggleNav}>
            <BiRightArrow className="toggle icon" />
          </Col>
          <Col>
            <div className="text nav-text">Course Name</div>
          </Col>
        </Container>
        <Container className="menu-bar">
          {courseContent.map((module, moduleIndex) => (
            <Row key={moduleIndex} className="menu">
              <div className="module-number icon">{moduleIndex + 1}</div>
              <ListGroup className="menu-links">
                {module.map((courseItems, courseIndex) => (
                  <li key={courseIndex}>
                    {courseItems.map((item, courseIIndex) => (
                      <div onClick={item => hijoapadre(item)} key={courseIIndex} className="a">
                        <div className="icon classIcon">{courseIndex + 1}</div>
                        <span className="text">{item.courseITitle}</span>
                      </div>
                    ))}
                  </li>
                ))}
              </ListGroup>
            </Row>
          ))}
        </Container>
      </Nav>
    </div>
  );
};

export default ClassSideNav;
