import React, { useState } from "react";
import "../../../assets/styles/classes/ClassesForumsStyle.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
} from "@chakra-ui/react";
import { forums, answers } from "../../../core/models/AnswersMock";

interface InputBoxProps {
  onInputChange: (value: string) => void;
}

const Forum = ({ isLesson }: { isLesson: boolean }) => {
  const [answerView, setAnswerView] = useState(false);

  return (
    <div className="Div" style={{ height: "100%" }}>
      <Accordion
        style={{ backgroundColor: "transparent" }}
        className="Acordion"
        defaultIndex={[0]}
        allowMultiple
      >
        {forums?.map((forum, forumIndex) => {
          if ((forum.lesson !== undefined) === isLesson) {
            return (
              <AccordionItem
                className="AcordionItem"
                key={forumIndex}
                style={{
                  marginBottom: "0",
                  backgroundColor: "transparent",
                  color: "aliceblue",
                }}
              >
                <h2>
                  <AccordionButton className="AcordionButton">
                    <Box className="AcordionBox">{forum.forumTitle}</Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>

                {answers?.map((answer, answerIndex) =>
                  answer.forum == forum ? (
                    <AccordionPanel pb={4} className="Panel" key={answerIndex}>
                      {answer.messageContent}
                      <input
                        type="button"
                        value="Respuesta"
                        className="answer"
                      ></input>
                    </AccordionPanel>
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
            );
          }
        })}
      </Accordion>
    </div>
  );
};

export default Forum;
