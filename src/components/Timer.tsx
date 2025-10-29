import { useEffect } from "react";
import TimesUp from "./TimesUp";
import type { Action } from "../App";
import "../css/timer.css"

type Props = {
    timeRemaining: number
    status: string
    selectedOption: number | null
    dispatch: React.Dispatch<Action>
}

function Timer({timeRemaining, status, selectedOption, dispatch}: Props) {

    useEffect(() => {
        if (status !== "active" || selectedOption !== null || timeRemaining <= 0) return;

        const interval = setInterval(() => {
            dispatch({type: "tick"});
        }, 1000);

        return () => clearInterval(interval);
    }, [status, selectedOption, timeRemaining, dispatch]);

    useEffect(() => {
        if (timeRemaining === 0) {
            dispatch({type: "timeOut"});
        }
    }, [timeRemaining, dispatch]);
    console.log(timeRemaining);


  return (
    <>
      {timeRemaining > 0 && (
        <div className="time-bar">
          <div style={{
            width: `${(timeRemaining / 2000) * 100}%`,
            backgroundColor: timeRemaining > 10 ? "rgba(0, 255, 0, 0.6)" : timeRemaining > 5 ? "rgba(255, 238, 0, 0.6)" : "rgba(255, 0, 0, 0.6)"
          }}
          className="time-left">
          </div>
        </div>
    )}

      {timeRemaining <= 0 && (
        <>
          <TimesUp dispatch={dispatch} />
        </>
    )}
    </>
  );
}

export default Timer;