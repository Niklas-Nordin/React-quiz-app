import { useEffect } from "react";
import TimesUp from "./TimesUp";
import type { Action } from "../App";

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
        <p>{timeRemaining}</p>
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