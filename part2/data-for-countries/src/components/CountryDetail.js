import React from "react";

export default function CountryDetail(props) {
  console.log("props", props);
  return (
    <div id={props.countryName}>
      <h1>{props.countryName}</h1>
      <div>
        <h2>{props.countryName} Data</h2>
        <p>Population: {props.countryPopulation}</p>
        <p>Capital: {props.countryCapital}</p>

        <div>
          <h2>Flag</h2>
          <img alt={props.countryName} src={props.countrySRC}></img>
        </div>
      </div>
    </div>
  );
}
