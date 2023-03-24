import React, { createContext, useEffect, useRef, useState } from "react";

export const QuizContext = createContext();

export const ScreenOptions = {
  HOME: "home",
  QUIZ: "quiz",
  RESULT: "result",
};

const QuizContextProvider = ({ children }) => {
  const [time, setTime] = useState();
  const [screen, setScreen] = useState(ScreenOptions.QUIZ);

  const timeoutId = useRef();

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId.current);
    };
  }, []);

  const submitQuiz = () => {
    setScreen(ScreenOptions.RESULT);
  };

  const store = {
    submitQuiz,
    time,
    screen,
  };

  return <QuizContext.Provider value={store}>{children}</QuizContext.Provider>;
};

export default QuizContextProvider;
