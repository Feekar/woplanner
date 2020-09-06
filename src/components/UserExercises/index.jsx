import React from "react";
import styles from "./styles.module.scss";

const UserExercises = ({ exercises }) => {
  return (
    <ul className={styles.container}>
      {exercises.map((exercise, index) => {
        return (
          <li className={styles.row} key={`${exercise.name}-${index}`}>
            {exercise.name}
          </li>
        );
      })}
    </ul>
  );
};

export default UserExercises;
