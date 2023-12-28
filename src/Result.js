export default function Result({
  bill,
  tip,
  numPeople,
  onReset,
  isInitialState,
}) {
  function calculate() {
    const billNum = parseInt(bill);
    const tipNum = parseInt(tip);
    const peopleNum = parseInt(numPeople);

    if (peopleNum === 0) {
      return [0, 0];
    }

    const tipPerPerson = (billNum * (tipNum / 100)) / peopleNum;
    const totalPerPerson = (billNum + billNum * (tip / 100)) / peopleNum;

    if (Number.isNaN(tipPerPerson) || Number.isNaN(totalPerPerson)) {
      return [0, 0];
    }

    return [tipPerPerson, totalPerPerson];
  }

  const [tipPerPerson, totalPerPerson] = calculate();

  return (
    <div className="result">
      <div className="result__part">
        <div className="title">Tip Amount</div>
        <div className="subtitle">/ person</div>
        <div className="amount">${tipPerPerson.toFixed(2)}</div>
      </div>

      <div className="result__part">
        <div className="title">Total</div>
        <div className="subtitle">/ person</div>
        <div className="amount">${totalPerPerson.toFixed(2)}</div>
      </div>

      <input
        type="reset"
        onClick={onReset}
        value="Reset"
        className={`reset ${isInitialState && "initial"}`}
      />
    </div>
  );
}
