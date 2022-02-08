import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "./components/Country";
import SearchInput from "./components/SearchInput";
import CountryDetail from "./components/CountryDetail";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const countriesToShow =
    filter === ""
      ? []
      : countries.filter((country) =>
          country.name.common.toLowerCase().includes(filter.toLowerCase())
        );

  if (countriesToShow.length === 1) {
    return (
      <div>
        Find countries <input onChange={handleFilter} />
        <div>
          <CountryDetail country={countriesToShow[0]} />
        </div>
      </div>
    );
  }
  return (
    <div>
      Find countries <input onChange={handleFilter} />
      <div>
        {countriesToShow.length > 10
          ? "Too many matches, specify another filter"
          : countriesToShow.map((country) => (
              <div key={country.name.common}>
                <Country country={country} />
              </div>
            ))}
      </div>
    </div>
  );
}

export default App;
