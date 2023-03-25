import React, { createContext, useEffect, useRef, useState } from "react";

export const QuizContext = createContext();

export const ScreenOptions = {
  HOME: "home",
  QUIZ: "quiz",
  RESULT: "result",
};

const QuizContextProvider = ({ children }) => {
  const [time, setTime] = useState(120);
  const [screen, setScreen] = useState(ScreenOptions.HOME);
  const [score, setScore] = useState(0);

  const intervalId = useRef();

  useEffect(() => {
    return () => {
      clearTimeout(intervalId.current);
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      submitQuiz();
    }
  }, [time]);

  const startQuiz = () => {
    setScreen(ScreenOptions.QUIZ);
    intervalId.current = setInterval(() => {
      if (time === 1) {
        setTime((prev) => prev - 1);
        clearInterval(intervalId.current);
      } else {
        setTime((prev) => prev - 1);
      }
    }, 1000);
  };

  const submitQuiz = () => {
    setScreen(ScreenOptions.RESULT);
  };

  const handleScore = (payload) => {
    setScore((score) => score + payload);
  };

  const store = {
    submitQuiz,
    time,
    screen,
    startQuiz,
    handleScore,
  };

  return <QuizContext.Provider value={store}>{children}</QuizContext.Provider>;
};

export default QuizContextProvider;
