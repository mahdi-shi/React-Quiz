function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
      <p className="highscore" style={{ transform: "translateY(310px)" }}>
        highscore : {localStorage.getItem("highscore")}
      </p>
    </div>
  );
}

export default StartScreen;
