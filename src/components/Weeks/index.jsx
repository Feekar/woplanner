import React from "react";
import { Week } from "../";
import styles from "./styles.module.scss";

const Weeks = ({ weeksRepeated }) => {
  let weeks = [];
  for (let x = 1; x <= weeksRepeated; x++) {
    weeks.push(<Week weekNumber={x} key={x} />);
  }
  return <main className={styles.weeks}>{weeks}</main>;
};

export default Weeks;
