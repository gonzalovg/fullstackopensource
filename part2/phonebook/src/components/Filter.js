import React from "react";

export default function Filter(props) {
  return (
    <p>
      Filter shown with{" "}
      <input value={props.filter} onChange={props.onFilterChange}></input>
    </p>
  );
}
