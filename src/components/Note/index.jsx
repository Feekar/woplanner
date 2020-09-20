import React, { useState } from "react";

import { Button } from "../";

import styles from "./styles.module.scss";

const Note = ({ note, editing, onCancelNote, onUpdateNote }) => {
  const [newNoteText, setNewNoteText] = useState(note);

  if (!editing && !note) {
    return null;
  }

  const handleCancelClick = () => {
    onCancelNote();
  };

  const handleOkClick = () => {
    onUpdateNote(newNoteText);
  };

  const handleChange = (e) => {
    setNewNoteText(e.target.value);
  };

  return editing ? (
    <div className={styles.editingContainer}>
      <input
        type="text"
        value={newNoteText}
        placeholder={"Example: 3x10 30kg"}
        onChange={handleChange}
        maxlength="500"
      />
      <Button text={"Cancel"} type={"secondary"} onClick={handleCancelClick} />
      <Button text={"OK"} type={"primary"} onClick={handleOkClick} />
    </div>
  ) : (
    <div>
      <span clasName={styles.noteText}>{note}</span>
    </div>
  );
};

export default Note;
