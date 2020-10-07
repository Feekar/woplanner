import React from "react";
import { Exercises } from "../";
import styles from "./styles.module.scss";

const Day = ({ week, day, updateUserExercises }) => {
  return (
    <div className={styles.day}>
      <h3>{day.name}</h3>
      <Exercises
        updateUserExercises={updateUserExercises}
        userExercises={day.exercises}
        day={day.name}
        week={week}
      />
    </div>
  );
};

export default Day;
