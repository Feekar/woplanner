import React, { useState, useContext } from "react";
import { UserExercises } from "../";
import { ExercisePicker } from "../";

import styles from "./styles.module.scss";

const Exercises = () => {
  const [userExercises, setUserExercises] = useState([]);

  const addExercise = (value, type) => {
    const exercise = {
      type,
      name: value,
      id: Date.now(),
    };
    setUserExercises([...userExercises, exercise]);
  };

  return (
    <div className={styles.container}>
      <UserExercises exercises={userExercises} />
      <ExercisePicker addExercise={addExercise} />
    </div>
  );
};

export default Exercises;
