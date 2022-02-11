import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import personService from "./services/persons";

function App() {
    // const personsSample = [{ name: "Carlos", number: 1234456 }];

    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [filter, setFilter] = useState("");

    const getPersons = () => {
        personService.getAll().then((persons) => {
            setPersons(persons);
        });
    };

    const handleNewName = (event) => {
        setNewName(event.target.value);
    };
    const handleNewNumber = (event) => {
        setNewNumber(event.target.value);
    };

    const handleFilterChange = (event) => {
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
            if (
                window.confirm(
                    `${existingPerson.name} ya existe, sobreescribir?`
                )
            ) {
                updatePerson(existingPerson.id, newPerson);
                setNewNumber("");
                setNewName("");
                return;
            }
            setNewNumber("");
            setNewName("");
        }

        personService.add(newPerson).then((person) => {
            setPersons(persons.concat(person));
            setNewNumber("");
            setNewName("");
        });
    };

    const updatePerson = (id, newPerson) => {
        const dbPerson = persons.find((person) => person.id === id);
        const updatedPerson = { ...dbPerson, number: newPerson.number };
        console.log(updatedPerson);
        personService
            .update(existingPerson.id, updatedPerson)
            .then((responsePerson) => {
                setPersons(
                    persons.map((person) =>
                        person.id !== id ? person : responsePerson
                    )
                );
            });
    };

    const deletePerson = (id) => {
        personService
            .deletePerson(id)
            .then((res) =>
                setPersons(persons.filter((person) => person.id !== id))
            )
            .catch((err) => console.log("err", err));
    };

    // useEffect(deletePersons, []);
    useEffect(getPersons, []);

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

            <Filter
                filter={filter}
                onFilterChange={handleFilterChange}
            ></Filter>
            {persons
                .filter((person) => {
                    return person.name
                        .toLowerCase()
                        .includes(filter.toLowerCase());
                })
                .map((filteredPerson) => {
                    return (
                        <Person
                            key={filteredPerson.id}
                            person={filteredPerson}
                            deleteItem={() => deletePerson(filteredPerson.id)}
                        />
                    );
                })}
        </div>
    );
}

export default App;
