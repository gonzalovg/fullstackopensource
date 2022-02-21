import Note from "./components/Note";
import Notification from "./components/Notification";
import React, { useState, useEffect } from "react";
import noteService from "./services/notes";
import Footer from "./components/Footer";
import "./index.css";

const errorStyle = {
    color: "red",
};

const correctStyle = {
    color: "green",
};

export default function App(props) {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState("");
    const [showAll, setShowAll] = useState(true);
    const [notificationMessage, setNotificationMessage] =
        useState("gonso site");
    const [notificationStyle, setNotificationStyle] = useState(correctStyle);

    const toggleImportanceOf = (id) => {
        const note = notes.find((n) => n.id === id);
        const changedNote = { ...note, important: !note.important };

        noteService
            .update(id, changedNote)
            .then((returnedNote) => {
                setNotes(
                    notes.map((note) => (note.id !== id ? note : returnedNote))
                );
            })
            .catch((error) => {
                setNotificationStyle(errorStyle);
                setNotificationMessage(
                    `Note '${note.content}' was already removed from server`
                );
                setTimeout(() => {
                    setNotificationMessage(null);
                }, 5000);
                setNotes(notes.filter((n) => n.id !== id));
            });
    };

    const getNotes = () => {
        const nonExisting = {
            id: 10000,
            content: "This note is not saved to server",
            date: "2019-05-30T17:30:31.098Z",
            important: true,
        };
        noteService.getAll().then((initialNotes) => {
            setNotes(initialNotes.concat(nonExisting));
        });
    };
    const handleNoteChange = (event) => {
        setNewNote(event.target.value);
    };

    const addNote = (event) => {
        event.preventDefault();

        const noteObject = {
            id: notes.length + 1,
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
        };

        noteService
            .create(noteObject)
            .then((returnedNote) => {
                setNotes([...notes.concat(returnedNote)]);
                setNewNote("");
            })
            .finally(() => {
                setNotificationStyle(correctStyle);
                setNotificationMessage("success");
            });
    };

    const deleteNote = (id) => {
        noteService
            .deleteNote(id)
            .then(setNotes([...notes.filter((note) => note.id !== id)]))
            .catch((error) => {
                setNotificationStyle(errorStyle);
                setNotificationMessage(`Note was already removed from server`);
                setTimeout(() => {
                    setNotificationMessage(null);
                }, 5000);
                setNotes(notes.filter((n) => n.id !== id));
            });
    };

    const noteToShow = showAll ? notes : notes.filter((note) => note.important);

    useEffect(getNotes, []);
    return (
        <div>
            <h1>Notes</h1>
            <Notification
                style={notificationStyle}
                message={notificationMessage}
            />
            <button onClick={() => setShowAll(!showAll)}>
                show {showAll ? "important" : "important"}
            </button>
            <ul>
                {noteToShow.map((note) => (
                    <Note
                        key={note.id}
                        note={note}
                        toogleImportance={() => toggleImportanceOf(note.id)}
                        onDeleteClick={() => deleteNote(note.id)}
                    />
                ))}
            </ul>

            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange}></input>
                <button type="submit">save</button>
            </form>
            <Footer></Footer>
        </div>
    );
}
