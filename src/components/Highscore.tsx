import RestartQuitButton from "./RestartQuitButton";
import type { Action } from "../App";

type Props = {
    highscores: number[];
    dispatch: React.Dispatch<Action>;
};

function Highscore({ highscores, dispatch }: Props) {


  return (
    <>
      <h2>Highscores</h2>
      <ol>
        {highscores.map((score, i) => {
            return <li key={i}>{score}</li>;
        })}
      </ol>
      <RestartQuitButton dispatch={dispatch} />
    </>
  );
}

export default Highscore;