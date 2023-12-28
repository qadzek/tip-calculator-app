import { useState } from "react";

import Bill from "./Bill";
import People from "./People";
import Result from "./Result";
import Tip from "./Tip";

function App() {
  const initBill = "";
  const initTip = null;
  const initNumPeople = "";

  const [bill, setBill] = useState(initBill);
  const [tip, setTip] = useState(initTip);
  const [numPeople, setNumPeople] = useState(initNumPeople);

  const isInitialState =
    bill === initBill && tip === initTip && numPeople === initNumPeople;

  function handleReset() {
    setBill(initBill);
    setTip(initTip);
    setNumPeople(initNumPeople);
  }

  return (
    <div className="App">
      <div className="icon">
        <img src="./images/logo.svg" alt="" />
      </div>
      <div className="container">
        <Bill bill={bill} setBill={setBill} />
        <Tip tip={tip} setTip={setTip} />
        <People numPeople={numPeople} setNumPeople={setNumPeople} />
        <Result
          bill={bill}
          tip={tip}
          numPeople={numPeople}
          onReset={handleReset}
          isInitialState={isInitialState}
        />
      </div>
    </div>
  );
}

export default App;
