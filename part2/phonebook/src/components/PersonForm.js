import React from "react";

export default function PersonForm(props) {
  return (
    <>
      <h2>Insert new person</h2>
      <form onSubmit={props.onSubmit}>
        <div>
          name <input onChange={props.newNameHandler} value={props.newName} />
          number
          <input onChange={props.newNumberHandler} value={props.newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
}
