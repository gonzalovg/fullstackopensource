import React from "react";

export default function Person({ person }) {
   
  return (
    <p>
      {person.name} - {person.number}
    </p>
  );
}
