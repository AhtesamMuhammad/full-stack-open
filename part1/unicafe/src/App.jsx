import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Average = ({arrayClicks}) => {
  if(arrayClicks.length === 0){
    return(
      <div>0</div>
    )
  }

  const sum = arrayClicks.reduce((sum, number) => sum + number,0)
  const average = sum / arrayClicks.length
  return(
    <div>
      {average}
    </div>
  )
}

const Positive = ({arrayClicks}) => {
  if(arrayClicks.length === 0){
    return(
      <div>0 %</div>
    )
  }
  const sumPositive = arrayClicks.filter(value => value > 0).length
  const percent = (sumPositive/arrayClicks.length)*100
  return (
    <div>{percent} %</div>
  )
}

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
      <Average arrayClicks={allClicks}/>
      <Positive arrayClicks={allClicks}/>
    </div>
  );
};

export default App;
