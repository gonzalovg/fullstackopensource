import React, { useEffect, useState } from "react";

export default function Country(props) {
  //   const [uniqueMatch, setUniqueMatch] = useState(props.uniqueMatch);
  const [weatherData, setWeatherData] = useState("");
  const API_KEY =
    process.env.REACT_APP_API_KEY || "fb6cc431ee58d7486a977b26324e5864";
  const country = props.country;
  const lat = country.latlng[0];
  const long = country.latlng[1];
  const countryURL = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`;
  console.log(countryURL)
  useEffect(() => {
	  console.log('renderizado');
    fetch(countryURL)
      .then((res) => res.json())
      .then((res) => console.log('res', res.responseText))
      .catch((err) => console.log("err", err));
  }, []);

  if (props.uniqueMatch) {
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
  } else {
    return (
      <div id="2">
        <h1>{country.name.common}</h1>
      </div>
    );
  }
}
