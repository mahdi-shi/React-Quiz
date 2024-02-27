function Filter({ dispatch, difficulty }) {
  return (
    <div>
      <select
        className="filter"
        value={difficulty}
        onChange={(e) => dispatch({ type: "dif", payload: e.target.value })}
      >
        <option value={"easy"}>Easy</option>
        <option value={"normal"}>Normal</option>
        <option value={"hard"}>Hard</option>
      </select>
    </div>
  );
}

export default Filter;
