import React, { useState } from "react";
import { UserExercises } from "../";
import { ExercisePicker } from "../";

import styles from "./styles.module.scss";

const Exercises = ({ updateUserExercises, userExercises, week, day }) => {
  const addExercise = (value, type) => {
    const exercise = {
      type,
      name: value,
      id: Date.now(),
      note: "",
    };

    const newExercises = [...userExercises];
    newExercises.push(exercise);
    updateUserExercises(newExercises, week, day);
  };

  const updateExercise = (exercise) => {
    const newUserExercises = userExercises.map((e) =>
      e.id === exercise.id ? exercise : e
    );

    updateUserExercises(newUserExercises, week, day);
  };

  const deleteExercise = (exercise) => {
    const newExercises = userExercises.filter((e) => e.id !== exercise.id);
    updateUserExercises(newExercises, week, day);
  };

  return (
    <div className={styles.container}>
      <UserExercises
        exercises={userExercises}
        updateExercise={updateExercise}
        deleteExercise={deleteExercise}
      />
      <ExercisePicker addExercise={addExercise} />
    </div>
  );
};

export default Exercises;
