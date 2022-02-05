import React from "react";

export default function SearchInput(props) {
  return (
    <><h2>Search a country</h2>
      <input value={props.filterValue} onChange={props.onChange} placeholder="Search"></input>
    </>
  );
}
