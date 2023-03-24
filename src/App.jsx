import React, { useContext } from "react";
import { QuizContext, ScreenOptions } from "./contexts/QuizContext";
import Home from "./screens/Home";
import Quiz from "./screens/Quiz";
import Result from "./screens/Result";

const App = () => {
  const { screen } = useContext(QuizContext);
  if (screen === ScreenOptions.HOME) {
    return <Home />;
  } else if (screen === ScreenOptions.QUIZ) return <Quiz />;
  else return <Result />;
};

export default App;
