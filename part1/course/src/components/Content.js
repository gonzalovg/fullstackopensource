import React from "react";

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => {
        const random = Math.floor(Math.random() * 1000);
        return (
          <p key={random}>
            {part.name} {part.exercises}
          </p>
        );
      })}
    </>
  );
};

export default Content;
