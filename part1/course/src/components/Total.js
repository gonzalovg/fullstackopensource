import React from "react";

export default function Total({ parts }) {
  const total = parts.reduce((sum, el) => {
    return sum + el.exercises;
  }, 0);

  return <b>Number of exercises {total}</b>;
}
