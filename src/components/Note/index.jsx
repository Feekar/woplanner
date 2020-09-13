import React from "react";
import styles from "./styles.module.scss";

const Note = ({ text, editing }) => {
  if (!editing && !text) {
    return null;
  }

  return editing ? (
    <div className={styles.editingContainer}>
      <input type="text" value={text} placeholder={"Notes"} />
      <button>Cancel</button>
      <button>OK</button>
    </div>
  ) : (
    <span>test</span>
  );
};

export default Note;
