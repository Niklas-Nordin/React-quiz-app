import RestartQuitButton from "./RestartQuitButton";
import type { Action } from "../App";

type Props = {
    dispatch: React.Dispatch<Action>;
}

function TimesUp({ dispatch }: Props) {
  return (
    <>
        <h2 >Time's Up!</h2>
        <RestartQuitButton dispatch={dispatch} />
    </>
  );
}

export default TimesUp;