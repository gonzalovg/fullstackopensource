import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import personService from "./services/persons";
import Notification from "./components/Notification";
import "./index.css";

const defaultStyle = {
    backgroundColor: "grey",
};
const correctStyle = {
    backgroundColor: "green",
};
const errorStyle = {
    backgroundColor: "red",
};

function App() {
    // const personsSample = [{ name: "Carlos", number: 1234456 }];

    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [filter, setFilter] = useState("");
    const [notificationMsg, setNotificationMsg] = useState("");
    const [notificationStyle, setNotificationStyle] = useState(defaultStyle);

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

        personService
            .add(newPerson)
            .then((person) => {
                setPersons(persons.concat(person));
                setNewNumber("");
                setNewName("");
            })
            .finally(() => {
                setNotificationStyle(correctStyle);
                setNotificationMsg(`Item ${newPerson.name} inserted`);
            });
    };

    const updatePerson = (id, newPerson) => {
        const dbPerson = persons.find((person) => person.id === id);
        const updatedPerson = { ...dbPerson, number: newPerson.number };

        personService
            .update(existingPerson.id, updatedPerson)
            .then((responsePerson) => {
                setPersons(
                    persons.map((person) =>
                        person.id !== id ? person : responsePerson
                    )
                );
            })
            .finally(() => {
                setNotificationStyle(correctStyle);
                setNotificationMsg(`Item ${updatedPerson.name} updated`);
            });
    };

    const deletePerson = (id) => {
        personService
            .deletePerson(id)
            .then((res) =>
                setPersons(persons.filter((person) => person.id !== id))
            )
            .catch((err) => {
                setNotificationStyle(errorStyle);
                setNotificationMsg(`Item ${id} could not deleted`);
            })
            .finally(() => {
                console.log(notificationStyle);
                setNotificationStyle(correctStyle);
                setNotificationMsg(`Item ${id} deleted`);
            });
    };

    // useEffect(deletePersons, []);
    useEffect(getPersons, []);

    return (
        <div>
            <h1>PHONEBOOK</h1>
            <Notification
                style={notificationStyle}
                msg={notificationMsg}
            ></Notification>
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
