import React from "react";

import { Button } from "../";

import styles from "./styles.module.scss";

const Note = ({ text, editing, onCancelNote, onAddNote }) => {
  if (!editing && !text) {
    return null;
  }

  const handleClick = () => {
    onCancelNote();
  };

  return editing ? (
    <div className={styles.editingContainer}>
      <input type="text" value={text} placeholder={"Example: 3x10 30kg"} />
      <Button text={"Cancel"} type={"secondary"} onClick={handleClick} />
      <Button text={"OK"} type={"primary"} />
    </div>
  ) : (
    <span>test</span>
  );
};

export default Note;
