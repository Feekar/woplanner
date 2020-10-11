import React from "react";
import { Button } from "../";
import plus from "../../content/images/plus.svg";
import minus from "../../content/images/minus.svg";
import styles from "./styles.module.scss";

const Toolbar = ({ weeksRepeated, addRemoveWeeks }) => {
  return (
    <div className={styles.toolbar}>
      <Button
        onClick={() => addRemoveWeeks("remove")}
        icon={minus}
        iconAlt={"minus"}
        className={styles.removeWeek}
      >
        <img src={minus} alt="minus" />
      </Button>
      <span className={styles.weeksRepeated}>{weeksRepeated}</span>
      <Button
        onClick={() => addRemoveWeeks("add")}
        icon={plus}
        iconAlt={"plus"}
      >
        <img src={plus} alt="plus" className={styles.addWeek} />
      </Button>
      <span className={styles.weeksRepeatedText}>
        week{weeksRepeated > 1 && "s"}
      </span>
    </div>
  );
};

export default Toolbar;
