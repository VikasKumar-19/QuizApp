import React, { useState } from "react";
import QuizCard from "../components/QuizCard";
import quiz from "../../questions.json";

const Quiz = () => {
  const [responses, setResponses] = useState(
    new Array(quiz.total).fill("No Answer")
  );
  const [quesNo, setQuesNo] = useState(0);

  const handleOptionChange = (value) => {
    const updated = responses.map((resp, idx) => {
      if (idx === quesNo) {
        return value;
      }
      return resp;
    });
    setResponses(updated);
  };

  return (
    <>
      <QuizCard
        key={quiz.questions[quesNo].id}
        question={quiz.questions[quesNo].question}
        options={quiz.questions[quesNo].options}
        onOptionChange={handleOptionChange}
        selectedOption={responses[quesNo]}
      />
    </>
  );
};

export default Quiz;
