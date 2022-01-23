import { useState } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div className="App">
      <h1>Give Feedback</h1>
      <p>
        <Button onClick={handleGood} label="good"></Button>
        <Button onClick={handleNeutral} label="Neutral"></Button>
        <Button onClick={handleBad} label="Bad"></Button>
      </p>

      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    </div>
  );
}

export default App;
