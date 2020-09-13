import React from "react";
import styles from "./styles.module.scss";
import { UserExercise } from "../";

const UserExercises = ({ exercises, onDelete, onAddNotes }) => {
  return (
    <ul className={styles.container}>
      {exercises.map((exercise, index) => {
        return (
          <UserExercise
            exercise={exercise}
            key={`${exercise.name}${index}`}
            onDelete={onDelete}
            onAddNotes={onAddNotes}
          />
        );
      })}
    </ul>
  );
};

export default UserExercises;
