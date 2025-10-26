import Header from "./Header";
import type { Action } from "../App";
import "../css/startingPage.css"

type Props = {
  numQuestions: number;
  dispatch: React.Dispatch<Action>;
};

function StartingPage({ numQuestions, dispatch }: Props) {
  return (
    <div className="starting-page">
      <div className="starting-page-content">
        <Header />
        <h2 className="starting-page-subtitle">
          <span>{numQuestions} questions</span> <br />
          to test your knowledge in React
        </h2>
      </div>


      <button
        className="start-button"
        onClick={() => dispatch({ type: "start" })}
      >
        Start
      </button>
    </div>
  );
}

export default StartingPage;
