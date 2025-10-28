import type { Action } from "../App";
import "../css/restartQuitButton.css"

type Props = {
    dispatch: React.Dispatch<Action>;
}

function RestartQuitButton({ dispatch }: Props) {
  return (
    <div className="restart-quit-container">
      <button
        className="restart"
        onClick={() => dispatch({ type: "restart" })}
      >Restart</button>
      <button
        className="quit"
        onClick={() => dispatch({ type: "quit" })}
      >Quit</button>
    </div>
  );
}

export default RestartQuitButton;