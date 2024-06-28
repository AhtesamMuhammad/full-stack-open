import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ allClicks }) => {
  const { good, neutral, bad } = allClicks;
  const totalClicks = good + neutral + bad;

  const average = (good + bad * -1) / totalClicks;
  const positive = (good / totalClicks) * 100;

  return (
    <div>
      <p>{average}</p>
      <p>{positive} %</p>
    </div>
  );
};

const App = () => {
  const [allClicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGoodClick = () => {
    setClicks({ ...allClicks, good: allClicks.good + 1 });
  };

  const handleNeutralClick = () => {
    setClicks({ ...allClicks, neutral: allClicks.neutral + 1 });
  };

  const handleBadClick = () => {
    setClicks({ ...allClicks, bad: allClicks.bad + 1 });
  };

  if (allClicks.good === 0 && allClicks.neutral === 0 && allClicks.bad === 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={handleGoodClick} text="good" />
        <Button handleClick={handleNeutralClick} text="neutral" />
        <Button handleClick={handleBadClick} text="bad" />
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
      <p>good {allClicks.good}</p>
      <p>neutral {allClicks.neutral}</p>
      <p>bad {allClicks.bad}</p>
      <p>all {allClicks.good+allClicks.neutral+allClicks.bad}</p>
      <Statistics allClicks={allClicks} />
    </div>
  );
};

export default App;
