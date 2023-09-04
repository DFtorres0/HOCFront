import { useState } from "react";
import "../../../assets/styles/classes/ClassesForumsStyle.css";

import { forums, answers } from "../../../core/models/AnswersMock";
import { Accordion } from "react-bootstrap";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

interface InputBoxProps {
  onInputChange: (value: string) => void;
}

const Forum = ({ isLesson }: { isLesson: boolean }) => {
  const [answerView, setAnswerView] = useState(false);

  return (
    <div className="Div" style={{ height: "100%" }}>
      <Accordion
        style={{ backgroundColor: "transparent" }}
        defaultActiveKey="0"
      >
        {forums?.map((forum, forumIndex) => {
          if ((forum.lesson !== undefined) === isLesson) {
            return (
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
                {answers?.map((answer, answerIndex) =>
                  answer.forum == forum ? (
                    <AccordionBody className="Panel" key={answerIndex}>
                      {answer.messageContent}
                      <input
                        type="button"
                        value="Respuesta"
                        className="answer"
                      ></input>
                    </AccordionBody>
                  ) : null
                )}

                <div style={{height: "5vh"}} className="TextBoxAnswer">
                  <input
                    type="text"
                    placeholder="Escribe aquí"
                    className=""
                  ></input>
                </div>
                <input
                  type="button"
                  value="Respuesta"
                  className="ButtonAnswer"
                  id="answer"
                ></input>
              </AccordionItem>
            )
          }
          return null;
        })}
      </Accordion>
    </div>
  );
};

export default Forum;
