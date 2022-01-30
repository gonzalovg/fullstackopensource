import Note from "./components/Note";
import React, { useState } from "react";

export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);

  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    setNotes([...notes.concat(noteObject)]);
    setNewNote("");
  };

  

  const handleNoteChange = (event) => {
    console.log("event.target.value", event.target.value);
    setNewNote(event.target.value);
  };

  const noteToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? "important" : "important"}
      </button>
      <ul>
        {noteToShow.map((note) => (
          <Note key={note.id} note={note.content} />
        ))}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}></input>
        <button type="submit">save</button>
      </form>
    </div>
  );
}
