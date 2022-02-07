import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "./components/Country";
import SearchInput from "./components/SearchInput";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  // const [uniqueMatch, setUniqueMatch] = useState(false);

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

  const getFilteredCountries = () => {
    return countries
      .filter((country) => {
        return country.name.common.toLowerCase().includes(filter.toLowerCase());
      })
      .map((filteredCountry) => (
        <div key={filteredCountry.name.common}>
          <Country country={filteredCountry} uniqueMatch={false}></Country>
          <button onClick={() => setFilter(filteredCountry.name.common)}>
            show more
          </button>
        </div>
      ));
  };

  const handleFilteredCountries = () => {
    if (getFilteredCountries().length >= 10) {
      return <p>To many mathches</p>;
    } else if (getFilteredCountries().length === 1) {
      const country = countries.find((el) =>
        el.name.common.toLowerCase().includes(filter.toLowerCase())
      );

      return (
        <div>
          <Country uniqueMatch={true} country={country}></Country>
        </div>
      );
    } else {
      // setUniqueMatch(false);
      return getFilteredCountries();
    }
  };

  return (
    <div className="App">
      <div id="search">
        <SearchInput filterValue={filter} onChange={handleFilter}></SearchInput>
      </div>
      <div id="countries">{handleFilteredCountries()}</div>
    </div>
  );
}

export default App;
