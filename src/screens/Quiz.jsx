import React, { useContext, useState } from "react";
import QuizCard from "../components/QuizCard";
import quiz from "../../questions.json";
import { Box, Button, Container } from "@chakra-ui/react";
import { QuizContext } from "../contexts/QuizContext";

const Quiz = () => {
  const [responses, setResponses] = useState(
    new Array(quiz.total).fill("No Answer")
  );
  const [quesNo, setQuesNo] = useState(0);
  const { submitQuiz, handleScore } = useContext(QuizContext);

  const handleOptionChange = (value) => {
    const updated = responses.map((resp, idx) => {
      if (idx === quesNo) {
        return value;
      }
      return resp;
    });
    setResponses(updated);
  };

  const goToNextQues = () => {
    if (responses[quesNo] === quiz.questions[quesNo].correct) {
      handleScore(1);
    }
    if (quesNo === quiz.total - 1) {
      submitQuiz();
    } else {
      setQuesNo((prev) => prev + 1);
    }
  };

  return (
    <Container>
      <QuizCard
        key={quiz.questions[quesNo].id}
        question={quiz.questions[quesNo].question}
        options={quiz.questions[quesNo].options}
        onOptionChange={handleOptionChange}
        selectedOption={responses[quesNo]}
      />
      <Box display={"flex"} justifyContent="center">
        <Button colorScheme={"green"} my={4} onClick={goToNextQues}>
          {quesNo === quiz.total - 1 ? "Submit" : "Next"}
        </Button>
      </Box>
    </Container>
  );
};

export default Quiz;
