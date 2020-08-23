import React from "react";
import styles from "./styles.module.scss";
import { Day } from "../";

const Week = ({ weekNumber }) => {
  return (
    <div className={styles.week}>
      <hr />
      <h2>WEEK {weekNumber}</h2>
      <div className={styles.days}>
        <Day day={"MONDAY"} />
        <Day day={"TUESDAY"} />
        <Day day={"WEDNESDAY"} />
        <Day day={"THURSDAY"} />
        <Day day={"FRIDAY"} />
        <Day day={"SATURDAY"} />
        <Day day={"SUNDAY"} />
      </div>
    </div>
  );
};

export default Week;
