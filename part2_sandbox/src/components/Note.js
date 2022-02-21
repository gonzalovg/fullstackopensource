import React from "react";

const Note = ({ note, toogleImportance, onDeleteClick }) => {
    const label = note.important ? "make not important" : "make important";

    return (
        <li className="note">
            {note.content}
            <button onClick={toogleImportance}>{label}</button>
            <button onClick={onDeleteClick}>Delete</button>
        </li>
    );
};

export default Note;
