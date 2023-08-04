import React from "react";
import "./Notes.scss";

interface Note {
  show: true;
  // input: string;
  top: any;
  right: any;
}
type PropsType = {
  setNotes: Function;
  deleteNote: Function;
  hidden: Function;
  show: boolean;
  notes: Note[];
  i: number;
};

function Notes({ setNotes, deleteNote, hidden, notes, i }: PropsType) {
  return (
    <div className="note_paper">
      <div className="note_options">
        <button className="btns btnx" onClick={() => deleteNote()}>
          x
        </button>
        <button className="btns btn-" onClick={() => hidden(i)}>
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

      <div className={(notes[i].show && "note_body") || "none"}>
        <textarea
          name="note"
          id="1"
          className={(notes[i].show && "note_input") || "none"}
        ></textarea>
      </div>
    </div>
  );
}

export default Notes;
