import type {Action} from "../App.tsx"
import type { Question as QuestionType } from "../App.tsx";

type Props = {
  question: QuestionType
  selectedOption: number | null
  index: number
  points: number
  dispatch: React.Dispatch<Action>
}

function SelectOption({ question, selectedOption, index, points, dispatch }: Props) {

    const correctOption = question.correctOption
  let bg = ""

  
  const handleClickOption = (i: number) => {
    dispatch({type: "newAnswer", payload: { questionIndex: index, answerIndex: i, points: points }})
  }
  return (
    <>
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
    </>
  );
}

export default SelectOption;