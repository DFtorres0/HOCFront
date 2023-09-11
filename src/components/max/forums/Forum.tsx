import { useEffect, useState } from "react";
import "../../../assets/styles/classes/ClassesForumsStyle.css";

import {
  Accordion,
  Button,
  Form,
  Modal,
  Spinner,
  Stack,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import useListForums from "./hooks/useListForums";

const Forum = ({ isLesson }: { isLesson: boolean }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInputValue, setModalInputValue] = useState("");

  const {
    data: forumsList,
    isLoading: forumsListLoading,
    isSuccess: forumsListSuccess,
    isError: forumsListIsError,
    error: forumsListError,
  } = useListForums();

  const handleSubmitAnswer = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (forumsListIsError && forumsListError) {
      setErrorMessage("Error al cargar los foros");
      setShowToast(true);
    }
  }, [forumsListIsError, forumsListError]);

  return (
    <div className="Div" style={{ height: "100%" }}>
      <Accordion
        style={{ backgroundColor: "transparent", margin: "2rem 1rem 0 1rem" }}
        defaultActiveKey="0"
      >
        {forumsListLoading && (
          <Stack
            direction="horizontal"
            gap={3}
            style={{
              justifyContent: "center",
              alignItems: "center",
              margin: "0 1rem 0.5rem 0",
            }}
          >
            <Spinner role="status" />
          </Stack>
        )}
        {forumsListSuccess &&
          forumsList &&
          forumsList.map((forum, forumIndex) => (
            <AccordionItem
              eventKey={`${forumIndex}`}
              key={forumIndex}
              style={{
                marginBottom: "0",
                backgroundColor: "transparent",
                color: "aliceblue",
              }}
            >
              <AccordionHeader>{forum.forumTitle}</AccordionHeader>
              {forum.answers?.length ? (
                forum.answers.map((answer, answerIndex) =>
                  answer.forum === forum ? (
                    <AccordionBody
                      className="Panel"
                      key={answerIndex}
                      style={{ margin: "1rem 1rem 0 1rem" }}
                    >
                      {answer.messageContent}
                      <input
                        type="button"
                        value="Respuesta"
                        className="answer"
                      ></input>
                    </AccordionBody>
                  ) : null
                )
              ) : (
                <AccordionBody
                  className="Panel"
                  style={{ margin: "1rem 1rem 0 1rem" }}
                >
                  <p>Todavía no hay respuestas</p>
                </AccordionBody>
              )}

              <div style={{ height: "5vh" }} className="TextBoxAnswer">
                <input
                  type="text"
                  placeholder="Escribe aquí"
                  className=""
                ></input>
              </div>
              <Stack
                direction="horizontal"
                gap={3}
                style={{
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  margin: "0 1rem 0.5rem 0",
                }}
              >
                <Button
                  id="answer"
                  variant="primary"
                  style={{ margin: 0 }}
                  onClick={() => setModalOpen(true)}
                >
                  Responder
                </Button>
              </Stack>
            </AccordionItem>
          ))}
      </Accordion>
      <Modal show={modalOpen} onHide={() => setModalOpen(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Escribe tu respuesta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              type="text"
              placeholder="Escribe aquí"
              value={modalInputValue}
              onChange={(e) => setModalInputValue(e.target.value)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalOpen(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSubmitAnswer}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="bottom-start"
        style={{ zIndex: 10 }}
        className="p-3"
      >
        <Toast show={showToast} onClose={() => setShowToast(false)}>
          <Toast.Header>
            <strong className="me-auto">Error</strong>
          </Toast.Header>
          <Toast.Body>{errorMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default Forum;
