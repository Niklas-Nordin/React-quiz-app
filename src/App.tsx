import { useEffect, useReducer } from 'react'
import './App.css'
import { useState } from 'react'
import Loader from './components/Loader'
import StartingPage from './components/StartingPage'
import Question from './components/Question'
import Progress from './components/Progress'
import Header from './components/Header'
import Timer from './components/Timer'
import Highscore from './components/Highscore'
import NextFinishButton from './components/NextFinishButton'
import Footer from './components/Footer'

export type Question = {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

type QuestionResponse = {
  questions: Question[]
}

type State = {
  questions: Question[];
  status: "loading" | "ready" | "active" | "timeOut" | "finished" | "error";
  index: number;
  score: number;
  answers: Record<number, number>;
  points: number;
  timeRemaining: number;
}

export type Action = 
| {type: "dataReceived"; payload: Question[]}
| {type: "dataFailed"}
| {type: "start"}
| {type: "tick"}
| {type: "timeOut"}
| {type: "newAnswer"; payload: { questionIndex: number; answerIndex: number; points: number }}
| {type: "nextQuestion"; payload: number}
| {type: "finish"}
| {type: "restart"}
| {type: "quit"}

const initialState: State = {
  questions: [],
  status: "loading",
  index: 0,
  score: 0,
  answers: {},
  points: 0,
  timeRemaining: 20
}

const reducer = (state: State, action: Action): State => {
  
  switch (action.type) {
    case "dataReceived":
        return {
          ...initialState,
          questions: action.payload,
          status: "ready"
        }
    case "dataFailed":
      return {
        ...state,
        status: "error"
      }
    case "start":
      return {
        ...state,
        status: "active"
      }
    case "tick":
      return {
        ...state,
        timeRemaining: Math.max(state.timeRemaining - 1, 0)
      }
    case "timeOut":
      return {
        ...state,
        status: "timeOut"
      }
    case "newAnswer":
      const question = state.questions[action.payload.questionIndex]
      const isCorrect = action.payload.answerIndex === question.correctOption
      const newPoints = isCorrect ? state.points + question.points : state.points

      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.questionIndex]: action.payload.answerIndex,
        },
        points: newPoints
      }
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
      }
    case "finish":
      return {
        ...state,
        status: "finished"
      }
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "active"
      }
    case "quit":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready"
      }
    default:
      return state
  }
}
  
function App() {
  
  const [{questions, status, index, answers, points, timeRemaining}, dispatch] = useReducer(reducer, initialState)
  
  const [highscores, setHighscores] = useState<number[]>(() => {
    const storedHighscores = localStorage.getItem("highscores");
    return storedHighscores ? JSON.parse(storedHighscores) : [];
  });
  
  const numQuestions = questions.length;
  const currentQuestion = questions[index];
  const maxPoints = questions.reduce((total, question) => total + question.points, 0);

  useEffect(() => {
    if (status === "finished") {}
      setHighscores(prev => {
        const newHighscores = [...prev, points].sort((a, b) => b - a).slice(0, 5);
        localStorage.setItem("highscores", JSON.stringify(newHighscores));
        return newHighscores;
      })
  }, [status]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/questions.json");
        if(!res.ok) {
          throw new Error(`Response status: ${res.status}`)
        }

        const data: QuestionResponse = await res.json()
        dispatch({type: "dataReceived", payload: data.questions})

        console.log(data)

      } catch (error) {
        console.error(error)
        dispatch({type: "dataFailed"})
      }
    }

    fetchData()
  }, []);

  console.log(status)

  return (
    <div>
      {status === "loading" && <Loader />}
      {status === "ready" && <StartingPage numQuestions={numQuestions} dispatch={dispatch} />}
      {status === "active" && 
      <>
        <Question numQuestions={numQuestions} question={currentQuestion} index={index} points={points} timeRemaining={timeRemaining} maxPoints={maxPoints} selectedOption={answers[index] ?? null} dispatch={dispatch} />
      </>
      }
      {status === "timeOut" &&
      <>
        <Timer timeRemaining={timeRemaining} status={status} selectedOption={answers[index] ?? null} dispatch={dispatch} />
      </>
      }
      {status === "finished" && 
      <>
        <Highscore highscores={highscores} dispatch={dispatch} />
      </>
      }
      <Footer />
    </div>
  )
}

export default App
