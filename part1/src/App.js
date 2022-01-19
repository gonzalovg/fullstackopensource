import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";
import History from "./History";
// const App = (props) => {
//   const [counter, setCounter] = useState(0);

//   // setTimeout(() => setCounter(counter + 1), 1000);

//   const increaseByOne = () => setCounter(counter + 1);
//   const decreaseByOne = () => setCounter(counter - 1);
//   const setToZero = () => setCounter(0);

//   return (
//     <>
//       <Display counter={counter}></Display>
//       <Button text="-" onClick={decreaseByOne}></Button>
//       <Button text="reset" onClick={setToZero}></Button>
//       <Button text="+" onClick={increaseByOne}></Button>
//     </>
//   );
// };

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };
  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text="left"></Button>
      <Button onClick={handleRightClick} text="right"></Button>
      {right}
      <History allClicks={allClicks} />
    </div>
  );
};


export default App;
