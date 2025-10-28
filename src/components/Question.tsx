import type { Question as QuestionType } from "../App";
import type { Action } from "../App";
import "../css/question.css"
import NextFinishButton from "./NextFinishButton";
import Timer from "./Timer";
import SelectOption from "./SelectOption";
import Progress from "./Progress";

type Props = {
    numQuestions: number
    question: QuestionType
    index: number
    points: number
    maxPoints: number
    selectedOption: number | null
    timeRemaining: number
    dispatch: React.Dispatch<Action>
}

function Question({numQuestions, question, index, points, maxPoints, selectedOption, timeRemaining, dispatch}: Props) {

  return (
    <div className="question-container">
      <Progress index={index} numQuestions={numQuestions} points={points} maxPoints={maxPoints} />
      <div className="question-text-container">
        <h2 className="question">{question.question}</h2>
      </div>
      <Timer timeRemaining={timeRemaining} status="active" selectedOption={selectedOption} dispatch={dispatch} />

      <SelectOption question={question} selectedOption={selectedOption} index={index} points={points} dispatch={dispatch} />

      {selectedOption !== null && (
        <NextFinishButton numQuestions={numQuestions} dispatch={dispatch} index={index} />
      )}
    </div>
  );
}

export default Question;