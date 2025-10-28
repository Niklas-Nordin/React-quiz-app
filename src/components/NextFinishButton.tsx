import type { Action } from "../App";
import "../css/nextFinishButton.css"

type Props = {
    numQuestions: number
    dispatch: React.Dispatch<Action>
    index: number
}

function NextFinishButton({numQuestions, dispatch, index}: Props) {
  return (
    <>
      {index < numQuestions - 1 ? (
        <button className="next-finish-button" onClick={() => dispatch({type: "nextQuestion", payload: index + 1})}>Next</button>
      ) : (
        <button className="next-finish-button" onClick={() => dispatch({type: "finish"})}>Finish</button>
      )}
    </>
  );
}

export default NextFinishButton;