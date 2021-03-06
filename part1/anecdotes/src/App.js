import React, { useState } from "react";
import Button from "./Button";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [selected, setSelected] = useState(0);
  const [mostVoted, setMostVoted] = useState(0);

  const updateSelectedAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVote = () => {
    let oldVotes = votes;
    oldVotes[selected] += 1;
    setVotes(oldVotes);
    mostVotedAnecdote();
  };

  const mostVotedAnecdote = () => {
    setMostVoted(votes.indexOf(Math.max(...votes)));
  };

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>
        Anecdote {selected + 1} has {votes[selected]} votes
      </p>
      <Button onClick={updateSelectedAnecdote} label="Random"></Button>
      <Button onClick={handleVote} label="Vote"></Button>
      <section>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[mostVoted]}</p>
      </section>
    </div>
  );
};

export default App;
