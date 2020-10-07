import React from "react";
import styles from "./styles.module.scss";
import { Day } from "../";

const Week = ({ weekNumber, children }) => {
  return (
    <div className={styles.week}>
      <hr />
      <h2>WEEK {weekNumber + 1}</h2>
      <div className={styles.days}>{children}</div>
    </div>
  );
};

export default Week;
