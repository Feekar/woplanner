import React, { useState, useEffect } from "react";
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
      note: "",
    };
    setUserExercises([...userExercises, exercise]);
  };

  const updateExercise = (exercise) => {
    const newUserExercises = userExercises.map((e) =>
      e.id === exercise.id ? exercise : e
    );
    setUserExercises(newUserExercises);
  };

  const onDelete = (id) => {
    const newExercises = userExercises.filter((e) => e.id !== id);
    setUserExercises(newExercises);
  };

  return (
    <div className={styles.container}>
      <UserExercises
        exercises={userExercises}
        onDelete={onDelete}
        updateExercise={updateExercise}
      />
      <ExercisePicker addExercise={addExercise} />
    </div>
  );
};

export default Exercises;
