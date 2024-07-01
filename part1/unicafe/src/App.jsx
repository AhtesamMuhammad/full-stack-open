import { useState } from "react";

const getAnecdoteWithMostVotes = ({ points, anecdotes }) => {
  const maxVotes = Math.max(...points);
  console.log('max votes: ',maxVotes);
  const indexOfMaxVotes = points.indexOf(maxVotes);
  console.log('index max votes in point: ', indexOfMaxVotes);
  return anecdotes[indexOfMaxVotes];
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);

  const newAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  const addVote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
  };

  const maxValueAnecdote = getAnecdoteWithMostVotes({ points, anecdotes });
  
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={addVote}>vote</button>
      <button onClick={newAnecdote}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{maxValueAnecdote}</p>
    </div>
  );
};

export default App;
