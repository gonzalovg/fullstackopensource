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

  const getFilteredCountries = () => {
    return countries
      .filter((country) => {
        return country.name.common.toLowerCase().includes(filter.toLowerCase());
      })
      .map((filteredCountry) => (
        <Country
          key={filteredCountry.name.common}
          countryName={filteredCountry.name.common}
        ></Country>
      ));
  };

  const handleFilteredCountries = () => {
    if (getFilteredCountries().length >= 10) {
      return <p>To many mathches</p>;
    } else if (getFilteredCountries().length === 1 ) {
      const country = countries.find(
        (el) => el.name.common.toLowerCase().includes(filter.toLowerCase())
      );
      console.log('country', country);

      return (
        <CountryDetail
          countryName={country.name.common}
          countryPopulation={country.population}
          countryLanguages={country.languages}
          countrySRC={country.flags.png}
          countryCapital={country.capital}
        ></CountryDetail>
      );
    } else {
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
