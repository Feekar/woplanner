import React, { useState, useContext, useEffect } from "react";
import { UserExercises } from "../";
import { ExercisePicker } from "../";

import styles from "./styles.module.scss";

const Exercises = () => {
  const [userExercises, setUserExercises] = useState([]);

  useEffect(() => {
    // any time userExercises are updated write to localstorage
  }, [userExercises]);

  const addExercise = (value, type) => {
    const exercise = {
      type,
      name: value,
      id: Date.now(),
      notes: "",
    };
    setUserExercises([...userExercises, exercise]);
  };

  const onDelete = (id) => {
    const newExercises = userExercises.filter((e) => e.id !== id);
    setUserExercises(newExercises);
  };

  return (
    <div className={styles.container}>
      <UserExercises exercises={userExercises} onDelete={onDelete} />
      <ExercisePicker addExercise={addExercise} />
    </div>
  );
};

export default Exercises;
