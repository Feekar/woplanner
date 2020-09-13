import React, { useState } from "react";
import { TypeIndicator, Note } from "../";
import trashIcon from "../../content/images/trash.svg";
import addNoteIcon from "../../content/images/add_note.svg";
import styles from "./styles.module.scss";

const UserExercise = ({ exercise, onDelete, onAddNotes }) => {
  const [editingNote, setEditingNote] = useState(false);
  const addNotes = () => {
    setEditingNote(!editingNote);
  };

  return (
    <li className={styles.row}>
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
      <Note editing={editingNote} />
    </li>
  );
};

export default UserExercise;
