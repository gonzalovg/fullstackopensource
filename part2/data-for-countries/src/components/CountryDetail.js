import React from "react";

export default function CountryDetail({ country }) {
  return (
    <div id={country.name.common}>
      <h1>{country.name.common}</h1>
      <div>
        <h2>{country.name.common} Data</h2>
        <p>Population: {country.population}</p>
        <p>Capital: {country.capital}</p>

        <div>
          <h2>Flag</h2>
          <img alt={country.name.common} src={country.flags.svg}></img>
        </div>
      </div>
    </div>
  );
}
