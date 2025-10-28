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
        dispatch({type: "newAnswer", payload: { questionIndex: index, answerIndex: i, points: points}})
    }
  return (
    <>
      <ul className="option-container">
          {question.options.map((opt, i) => {
            let borderStyle = ""
            if (selectedOption !== null) {
              if (i === correctOption) {
                bg = "linear-gradient(to right, rgb(21, 221, 21), rgb(21, 221, 21))"
                borderStyle = "3px solid rgb(3, 153, 3)"
              } else {
                bg = "linear-gradient(to right, rgba(226, 19, 19), rgb(226, 19, 19))"
                borderStyle = "3px solid rgba(116, 2, 2, 0.6)"
              }
            }

            return (
              <li className="option-items" key={i}>
                <button 
                  disabled={selectedOption !== null}
                  onClick={() =>
                  handleClickOption(i)}
                  style={{ background: bg, borderBottom: borderStyle }}
                  className="option-button">{opt}</button>
            </li>
            )
          })}
        </ul>
    </>
  );
}

export default SelectOption;