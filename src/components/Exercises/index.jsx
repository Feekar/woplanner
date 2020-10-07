import React, { useState } from "react";
import { UserExercises } from "../";
import { ExercisePicker } from "../";

import styles from "./styles.module.scss";

const Exercises = ({ updateUserExercises, userExercises, week, day }) => {
  // const [userExercises, setUserExercises] = useState([]);

  // useEffect(() => {
  //   console.log(userExercises);
  // }, [userExercises]);

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

    // setUserExercises(newUserExercises);
  };

  // const onDelete = (id) => {
  //   const newExercises = userExercises.filter((e) => e.id !== id);
  //   setUserExercises(newExercises);
  // };

  return (
    <div className={styles.container}>
      <UserExercises
        exercises={userExercises}
        updateExercise={updateExercise}
      />
      <ExercisePicker addExercise={addExercise} />
    </div>
  );
};

export default Exercises;
