import { useEffect } from "react";

function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const percentage = Math.ceil((points / maxPoints) * 100);
  let emoji;

  if (percentage < 100 && percentage > 75) {
    emoji = "😎";
  }
  if (percentage < 75 && percentage > 50) emoji = "😉";
  if (percentage < 50 && percentage > 25) emoji = "😮";
  if (percentage < 25 && percentage > 0) emoji = "😒";
  if (percentage === 0) emoji = "🤢";

  useEffect(function () {
    localStorage.setItem("highscore", highscore);
  }, []);

  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points}</strong> out of {maxPoints} (
        {percentage}%)
      </p>
      <p className="highscore">(Highscore : {highscore} points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
