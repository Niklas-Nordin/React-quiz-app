import type {Action} from "../App";

type Props = {
  index: number;
  numQuestions: number;
  points: number;
  maxPoints: number;
  dispatch?: React.Dispatch<Action>;
}

function Progress({index, numQuestions, points, maxPoints, dispatch}: Props) {
  return (
    <>
      <progress value={index} max={numQuestions}></progress>
      <p>{points} / {maxPoints}</p>
    </>
  );
}

export default Progress;