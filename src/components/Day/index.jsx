import React from "react";
import styles from "./styles.module.scss";

const Day = ({ day }) => {
  return (
    <div className={styles.day}>
      <h3>{day}</h3>
      <div>Add exercise</div>
    </div>
  );
};

export default Day;
