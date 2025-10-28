import RestartQuitButton from "./RestartQuitButton";
import type { Action } from "../App";
import "../css/timesUp.css"

type Props = {
    dispatch: React.Dispatch<Action>;
}

function TimesUp({ dispatch }: Props) {
  return (
    <div className="times-up-container">
        <h2 className="times-up">Time's Up!</h2>
        <RestartQuitButton dispatch={dispatch} />
    </div>
  );
}

export default TimesUp;