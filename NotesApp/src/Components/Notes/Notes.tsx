import React from "react";
import "./Notes.scss";

type PropsType = {
  setNotes: Function;
  deleteNote: Function;
  hidden: Function;
  show: boolean;
};

function Notes({ setNotes, deleteNote, hidden, show }: PropsType) {
  console.log(show);
  return (
    <div className="note_paper">
      <div className="note_options">
        <button className="btns btnx" onClick={() => deleteNote()}>
          x
        </button>
        <button className="btns btn-" onClick={() => hidden()}>
          -
        </button>
        <button
          className="btns btnm"
          onClick={() => {
            // Assuming newNote is the new note data (e.g., a string representing the note)
            setNotes(Notes);
          }}
        >
          +
        </button>
      </div>

      <div className={(show && "note_body") || "none"}>
        <textarea
          name="note"
          id="1"
          className={(show && "note_input") || "none"}
        ></textarea>
      </div>
    </div>
  );
}

export default Notes;
