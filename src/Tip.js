export default function Tip({ tip, setTip }) {
  return (
    <div className="tip">
      <label>Select Tip %</label>
      <div className="tip__btn-container">
        <TipBtn value={5} setTip={setTip} tip={tip} />
        <TipBtn value={10} setTip={setTip} tip={tip} />
        <TipBtn value={15} setTip={setTip} tip={tip} />
        <TipBtn value={25} setTip={setTip} tip={tip} />
        <TipBtn value={50} setTip={setTip} tip={tip} />
        <input
          type="number"
          className="tip__custom"
          onChange={(e) => setTip(parseInt(e.target.value))}
          placeholder="Custom"
          pattern="[0-9]*"
          inputMode="numeric"
        />
      </div>
    </div>
  );
}

function TipBtn({ value, setTip, tip }) {
  return (
    <button
      className={`tip__btn ${value === tip && "tip__btn--sel"}`}
      onClick={() => setTip((c) => value)}
    >
      {value}%
    </button>
  );
}
