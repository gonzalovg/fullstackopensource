import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;


  console.log("Hello from component!");
  return (
    <div>
      <p>Hello World, it is {now.toString()}</p>
    </div>
  );
};

export default App;
