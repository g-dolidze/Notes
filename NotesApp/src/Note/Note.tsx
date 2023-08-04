import React, { useEffect, useState } from "react";
import Notes from "../Components/Notes";
import "./Note.scss";
import styled from "styled-components";
interface Note {
  show: true;
  // input: string;
  top: any;
  right: any;
}

const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = () => {
    setNotes((prevNotes) => [
      ...prevNotes,
      { show: true, top: getRandomPosition(), right: getRandomPosition() },
    ]);
  };
  const Note = styled.li`
    position: absolute;
    top: ${(props) => props.top}vh;
    right: ${(props) => props.right}%;
  `;
  const getRandomPosition = () => {
    let min = 5;
    let max = 90;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const hidden = (i: number) => {
    setNotes((prevNotes) =>
      prevNotes.map((note, index) =>
        index === i ? { ...note, show: !note.show } : note
      )
    );
  };

  const deleteNote = (index: number) => {
    notes.length > 1 &&
      setNotes((prevNotes) => prevNotes.filter((note, i) => i !== index));
  };

  useEffect(() => {
    addNote();
  }, []);

  return (
    <div className="page">
      <ul>
        {notes.map((note, index) => (
          <Note key={index} top={note.top} right={note.right}>
            <Notes
              setNotes={addNote}
              deleteNote={() => deleteNote(index)}
              hidden={hidden}
              notes={notes}
              i={index}
              show={false}
            />
          </Note>
        ))}
      </ul>
    </div>
  );
};

export default App;
