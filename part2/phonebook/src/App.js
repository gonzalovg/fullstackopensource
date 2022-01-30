import React, { useState } from "react";
import Filter from "./components/Filter";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";

function App() {
  const personsSample = [{ name: "Carlos", number: 1234456 }];

  const [persons, setPersons] = useState(personsSample);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    console.log("filter", filter);
    setFilter(event.target.value);
  };

  const existingPerson = persons.find(
    (person) => person.name.toLowerCase() === newName.toLowerCase()
  );

  const addNewPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };

    if (existingPerson) {
      setNewNumber("");
      setNewName("");
    }

    setPersons([...persons.concat(newPerson)]);

    setNewNumber("");
    setNewName("");
  };

  return (
    <div>
      <h2>PHONEBOOK</h2>
      <PersonForm
        onSubmit={addNewPerson}
        newNameHandler={handleNewName}
        newNumberHandler={handleNewNumber}
        newName={newName}
        newNumber={newNumber}
      ></PersonForm>
      <h2>Persons</h2>
      {/* {persons.map((person) => (
        <Person key={Math.random() * 5000000} person={person} />
      ))} */}
      <Filter filter={filter} onFilterChange={handleFilterChange}></Filter>
      {persons
        .filter((person) => {
          return person.name.toLowerCase().includes(filter.toLowerCase());
        })
        .map((filteredPerson) => {
          return <Person person={filteredPerson} />;
        })}
    </div>
  );
}

export default App;
