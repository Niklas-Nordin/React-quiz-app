import type { Question as QuestionType } from "../App";
import type { Action } from "../App";
import "../css/question.css"
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
    <div className="question-container">
        <p>{index + 1} / {numQuestions}</p>
        <div className="question-text-container">
          <h2 className="question">{question.question}</h2>
        </div>

        <ul className="option-container">
          {question.options.map((opt, i) => {
            if (selectedOption !== null) {
              if (i === correctOption) {
                bg = "rgba(0, 255, 0, 0.6)"
              } else {
                bg = "rgba(255, 0, 0, 0.6)"
              }
            }

            return (
              <li className="option-items" key={i}>
                <button 
                  disabled={selectedOption !== null}
                  onClick={() =>
                  handleClickOption(i)}
                  style={{ backgroundColor: bg }}
                  className="option-button">{opt}</button>
            </li>
            )
          })}
        </ul>

        {selectedOption !== null && (
          <NextFinishButton numQuestions={numQuestions} dispatch={dispatch} index={index} />
        )}
    </div>
  );
}

export default Question;