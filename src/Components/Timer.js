import { useEffect } from "react";

function Timer({ dispatch, secondeRemaining }) {
  const min = Math.floor(secondeRemaining / 60);
  const sec = Math.floor(secondeRemaining % 60);

  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div>
      <p className="timer">
        {min < 10 && "0"}
        {min}:{sec < 10 && "0"}
        {sec}
      </p>
    </div>
  );
}

export default Timer;
