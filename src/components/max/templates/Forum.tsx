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
import {forums,answers} from "../../../core/models/AnswersMock";


interface InputBoxProps {
  onInputChange: (value: string) => void;
}

const Forum = ({isLesson}:{isLesson:boolean}) => {
  const [answerView, setAnswerView] = useState(false);

  return (
    <div className="Div" style={{ marginBottom: "50px", height: "120%" }}>
      <Accordion className="Acordion" allowToggle>
      {forums.map((forum, forumIndex)=>{if((forum.Lesson !== undefined)===isLesson){return (
        <AccordionItem className="AcordionItem" key={forumIndex} style={{ marginBottom: "50px"}}>
        <h2>
          <AccordionButton className="AcordionButton">
            <Box className="AcordionBox">{forum.ForumTitle}</Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        
        {answers.map((answer,answerIndex)=> answer.Forum==forum?(
          <AccordionPanel pb={4} className="Panel" key={answerIndex}>
          {answer.MessageContent}
          <input type="button" value="Respuesta" className="answer"></input>
        </AccordionPanel>
        ):null)}

        <div className="TextBoxAnswer"><input type="text" placeholder="Escribe aquí" className="TextBox"></input></div>
        <input
          type="button"
          value="Respuesta"
          className="ButtonAnswer"
          id="answer"
        ></input>
      </AccordionItem>
      )}})}
      </Accordion>
    </div>
  );
};

export default Forum;
