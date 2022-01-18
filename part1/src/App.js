import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";

const App = (props) => {
  const [counter, setCounter] = useState(0);

  // setTimeout(() => setCounter(counter + 1), 1000);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <>
      <Display counter={counter}></Display>
      <Button text="-" onClick={decreaseByOne}></Button>
      <Button text="reset" onClick={setToZero}></Button>
      <Button text="+" onClick={increaseByOne}></Button>
    </>
  );
};

export default App;
