import React from "react";

export default function Person({ person, deleteItem }) {
   
  return (
    <p>
      {person.name} - {person.number}
      <button onClick={deleteItem} >delete</button>
    </p>
  );
}
