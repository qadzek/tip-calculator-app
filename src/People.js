export default function People({ numPeople, setNumPeople }) {
  const isError = parseInt(numPeople) === 0;

  return (
    <div className="people">
      <label htmlFor="people__field">Number of People</label>

      {isError && <span className="people__err">Can't be zero</span>}

      <input
        type="text"
        id="people__field"
        className={`${isError ? "err" : ""}`}
        value={numPeople}
        onChange={(e) => setNumPeople(e.target.value)}
        placeholder={0}
      />
    </div>
  );
}
