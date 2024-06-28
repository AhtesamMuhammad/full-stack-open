import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => {
  if (text !== "positive") {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{text}</td>
      <td>{value} %</td>
    </tr>
  );
};

const Statistics = ({ allClicks }) => {
  const { good, neutral, bad } = allClicks;
  const totalClicks = good + neutral + bad;

  const average = (good + bad * -1) / totalClicks;
  const positive = (good / totalClicks) * 100;

  if (totalClicks === 0) {
    return <p>No feedback given</p>
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={totalClicks} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
          </tbody>
      </table>
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

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
      <Statistics allClicks={allClicks} />
    </div>
  );
};

export default App;
