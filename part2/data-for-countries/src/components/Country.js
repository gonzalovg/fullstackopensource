import React, { useState } from "react";
import CountryDetail from "./CountryDetail";

export default function Country({ country }) {
  const [show, setShow] = useState(false);

  const handleButtonClick = () => setShow(!show);

  if (show) {
    return (
      <div>
        <h1>
          {country.name.common}{" "}
          <button onClick={handleButtonClick}>{show ? "Hide" : "Show"}</button>
          <CountryDetail country={country}></CountryDetail>
        </h1>
      </div>
    );
  }
  return (
    <div id="2">
      <h1>
        {country.name.common}
        <button onClick={handleButtonClick}>{show ? "Hide" : "Show"}</button>
      </h1>
    </div>
  );
}
