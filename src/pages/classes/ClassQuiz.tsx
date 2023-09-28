import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const ClassQuiz = ({ quiz, quizCompleted }: { quiz: Quiz, quizCompleted: (data: boolean | null) => void }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: number;
  }>({});

  const handleAnswerSelect = (questionId: number, answerId: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerId,
    });
  };

  const checkAnswers = () => {
    let newScore = 0

    quiz.questions.forEach((question: Questions) => {
      const selectedAnswerId = selectedAnswers[question.questionId];
      if (selectedAnswerId !== undefined) {
        const selectedAnswer = question.questionAnswers.find(
          (answer: { questionAnswerId: number }) =>
            answer.questionAnswerId === selectedAnswerId
        );
        if (selectedAnswer != undefined && selectedAnswer.isCorrect) {
          newScore++
        }
      }
    });

    if (newScore >= 2 * (quiz.questions.length / 3)) {
      quizCompleted(true)
      alert("Pasate, puedes ir por tu certificado: "+ newScore+ "/"+ quiz.questions.length)
    } else {
      alert("Reprobaste: "+ newScore+ "/"+ quiz.questions.length)
    }
  };
  return (
    <div>
      <Container className="h1">{quiz.quizName}</Container>
      {quiz.questions?.map((question, questionIndex) => (
        <Container style={{}} key={questionIndex}>
          <Container className="h4">{question.questionQuery}</Container>
          <Form.Select
            style={{
              fontSize: "20px",
              maxWidth: "40vw",
              marginLeft: "30px",
              backgroundColor: "#19353b",
              color: "aliceblue",
              borderColor: "transparent",
              marginBottom: "25px",
              marginTop: "10px",
            }}
            size="sm"
            value={selectedAnswers[question.questionId] || ""}
            onChange={(e) =>
              handleAnswerSelect(
                question.questionId,
                Number.parseInt(e.target.value)
              )
            }
            aria-label="Selecciona una respuesta"
          >
            <option value="0">Selecciona una respuesta</option>
            {question.questionAnswers.map(
              (
                answer: QuestionAnswers,
                answerIndex: React.Key | null | undefined
              ) => (
                <option key={answerIndex} value={answer.questionAnswerId}>
                  {answer.questionAnswerText}
                </option>
              )
            )}
          </Form.Select>
        </Container>
      ))}
      <Button
        style={{ marginTop: "5vh", marginBottom: "5vh", marginLeft: "5vw" }}
        size="lg"
        onClick={checkAnswers}
      >
        Comprobar respuestas
      </Button>
    </div>
  );
};

export default ClassQuiz;
