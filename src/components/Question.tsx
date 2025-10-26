import Timer from "./Timer";
import type { Question as QuestionType } from "../App";
import type { Action } from "../App";
import NextFinishButton from "./NextFinishButton";

type Props = {
    numQuestions: number
    question: QuestionType
    index: number
    points: number
    maxPoints: number
    selectedOption: number | null
    dispatch: React.Dispatch<Action>
}

function Question({numQuestions, question, index, points, selectedOption, dispatch}: Props) {

  const correctOption = question.correctOption
  let bg = ""

  const handleClickOption = (i: number) => {
    dispatch({type: "newAnswer", payload: { questionIndex: index, answerIndex: i, points: points }})
  }

  return (
    <div>
        <p>{index + 1} / {numQuestions}</p>
        <h2>{question.question}</h2>
        
        <ul>
          {question.options.map((opt, i) => {
            if (selectedOption !== null) {
              if (i === correctOption) {
                bg = "rgba(0, 255, 0, 0.6)"
              } else {
                bg = "rgba(255, 0, 0, 0.6)"
              }
            } else {
              bg = "rgb(240, 240, 240)"
            }

            return (
              <li key={i}>
              <button 
                disabled={selectedOption !== null}
                onClick={() =>
                handleClickOption(i)}
                style={{ backgroundColor: bg }}
                className={`${bg}`}>{opt}</button>
            </li>
            )
          })}
        </ul>
    </div>
  );
}

export default Question;