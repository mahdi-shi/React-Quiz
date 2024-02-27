function Button({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        onClick={() => dispatch({ type: "newQuestion" })}
        className="btn btn-ui"
      >
        Next
      </button>
    );
  if (index === 14)
    return (
      <button
        onClick={() => dispatch({ type: "finishQuestion" })}
        className="btn btn-ui"
      >
        Finish
      </button>
    );
}

export default Button;
