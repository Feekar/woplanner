import React, { useState } from "react";
import { TypeIndicator, NoteEditor } from "../";
import trashIcon from "../../content/images/trash.svg";
import addNoteIcon from "../../content/images/add_note.svg";
import styles from "./styles.module.scss";

const UserExercise = ({ exercise, onDelete, onAddNotes, key }) => {
  const [showNotesEditor, setShowNotesEditor] = useState(false);
  const addNotes = () => {
    setShowNotesEditor(true);
  };

  return (
    <li className={styles.row} key={key}>
      <div className={styles.top}>
        <div className={styles.left}>
          <TypeIndicator type={exercise.type} />
          {exercise.name}
        </div>
        <div className={styles.right}>
          <button
            style={{ backgroundImage: `url(${trashIcon})` }}
            onClick={() => onDelete(exercise.id)}
          ></button>
          <button
            style={{ backgroundImage: `url(${addNoteIcon})` }}
            onClick={() => addNotes(exercise.id)}
          ></button>
        </div>
      </div>
      {showNotesEditor && <NoteEditor />}
    </li>
  );
};

export default UserExercise;
