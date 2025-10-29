import RestartQuitButton from "./RestartQuitButton";
import type { Action } from "../App";
import "../css/highscore.css"

type Props = {
    highscores: number[];
    dispatch: React.Dispatch<Action>;
};

function Highscore({ highscores, dispatch }: Props) {


  return (
    <div className="highscore-container">
      <h2 className="highscore-title">Highscores</h2>
      <ol className="highscore-list">
        {highscores.map((score, i) => {
            return <li className="highscore-place" key={i}>{score}</li>;
        })}
      </ol>
      <RestartQuitButton dispatch={dispatch} />
    </div>
  );
}

export default Highscore;