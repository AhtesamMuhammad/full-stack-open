import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ arrayClicks }) => {
  if (arrayClicks.length === 0) {
    return <div>0</div>;
  }

  const sumAllScores = arrayClicks.reduce((sum, number) => sum + number, 0);
  const average = sumAllScores / arrayClicks.length;

  const sumPositive = arrayClicks.filter((value) => value > 0).length;
  const percentaPositive = (sumPositive / arrayClicks.length) * 100;

  return (
    <div>
      <p>{average}</p>
      <p>{percentaPositive} %</p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleGoodClick = () => {
    setGood(good + 1);
    setAll(allClicks.concat(1));
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAll(allClicks.concat(0));
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setAll(allClicks.concat(-1));
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {allClicks.length}</p>
      <Statistics arrayClicks={allClicks} />
    </div>
  );
};

export default App;
