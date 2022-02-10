import Note from "./components/Note";
import React, { useState, useEffect } from "react";
import noteService from "./services/notes";

export default function App(props) {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState("");
    const [showAll, setShowAll] = useState(true);

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
                alert(
                    `the note '${note.content}' was already deleted from server`
                );
                setNotes(notes.filter((n) => n.id !== id));
            });
    };

    const getNotes = () => {
        noteService.getAll().then((initialNotes) => {
            setNotes(initialNotes);
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

        noteService.create(noteObject).then((returnedNote) => {
            setNotes(notes.concat(returnedNote));
            setNewNote("");
        });
    };

    const noteToShow = showAll ? notes : notes.filter((note) => note.important);

    useEffect(getNotes, []);
    return (
        <div>
            <h1>Notes</h1>
            <button onClick={() => setShowAll(!showAll)}>
                show {showAll ? "important" : "important"}
            </button>
            <ul>
                {noteToShow.map((note) => (
                    <Note
                        key={note.id}
                        note={note}
                        toogleImportance={() => toggleImportanceOf(note.id)}
                    />
                ))}
            </ul>

            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange}></input>
                <button type="submit">save</button>
            </form>
        </div>
    );
}
