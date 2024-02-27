function Progress({ index, numQuestions, answer, points, maxPoints }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Questions{" "}
        <strong>
          {index + 1} / {numQuestions}
        </strong>
      </p>
      <p>
        {points} / {maxPoints}
      </p>
    </header>
  );
}

export default Progress;
