import React from "react";

const Part = (props) => {
  return (
    <p>
      {props.name} {props.number}
    </p>
  );
};

const Content = (props) => {
    
  return (
    <div>
      <Part name={props.parts[0].name} number={props.parts[0].exercises}></Part>
      <Part name={props.parts[1].name} number={props.parts[1].exercises}></Part>
      <Part name={props.parts[2].name} number={props.parts[2].exercises}></Part>
      
    </div>
  );
};

export default Content;
