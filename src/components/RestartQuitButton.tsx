import type { Action, Question } from "../App";

type Props = {
    dispatch: React.Dispatch<Action>;
}

function RestartQuitButton({ dispatch }: Props) {
  return (
    <div>
      <button
        onClick={() => dispatch({ type: "restart" })}
      >Restart</button>
      <button
        onClick={() => dispatch({ type: "quit" })}
      >Quit</button>
    </div>
  );
}

export default RestartQuitButton;