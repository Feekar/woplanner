import React from "react";
import { Exercises } from "../";
import styles from "./styles.module.scss";

const Day = ({ day }) => {
  return (
    <div className={styles.day}>
      <h3>{day}</h3>
      <Exercises />
    </div>
  );
};

export default Day;
