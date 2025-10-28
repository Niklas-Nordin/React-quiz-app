import "../css/progress.css"

type Props = {
  index: number
  numQuestions: number
  points: number;
  maxPoints: number;
}

function Progress({points, maxPoints, numQuestions, index}: Props) {
  return (
    <div className="progress-container">
      <p>{index + 1} / {numQuestions}</p>
      <p>{points} / {maxPoints}</p>
    </div>
  );
}

export default Progress;