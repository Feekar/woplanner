import React from "react";
import styles from "./styles.module.scss";
import { UserExercise } from "../";

const UserExercises = ({ exercises, deleteExercise, updateExercise }) => {
  return (
    <ul className={styles.container}>
      {exercises.map((exercise, index) => {
        return (
          <UserExercise
            exercise={exercise}
            key={`${exercise.name}${index}`}
            deleteExercise={deleteExercise}
            updateExercise={updateExercise}
          />
        );
      })}
    </ul>
  );
};

export default UserExercises;
