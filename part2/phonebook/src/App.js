import react, { useState } from "react";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "123456789" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchBar, setSearchBar] = useState("");

  const [filteredPersons, setFilteredPersons] = useState("");

  const handleFilteredPersons = () => {
    const alikePersons = persons.filter(
      (person) => person.name.toLowerCase() === searchBar
    );
  };

  const handleSearchBar = (event) => {
    setSearchBar(event.target.value);
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const addNewPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    console.log("persons", persons);

    const personAlreadyExists = persons.filter((person) =>
      person.name === newPerson.name ? true : false
    );

    personAlreadyExists.length < 1
      ? setPersons([...persons.concat(newPerson)])
      : alert("person already exists");
    setNewName("");

    console.log("personAlreadyExists", personAlreadyExists);
  };

  return (
    <div>
      <h2>PHONEBOOK</h2>
      <div>
        search : <input onChange={handleFilteredPersons} />
      </div>
      <form onSubmit={addNewPerson}>
        <div>
          name <input onChange={handleNewName} value={newName} />
          number <input onChange={handleNewNumber} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Persons</h2>
      {persons.map((person) => (
        <p key={Math.random() * 5000000}>
          {person.name} - {person.number}
        </p>
      ))}
    </div>
  );
}

export default App;
