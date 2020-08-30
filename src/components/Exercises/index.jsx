import React, { useContext, useState } from "react";
import ExercisesContext from "../../Context";
import { Dropdown } from "../";
import plus from "../../content/images/plus.svg";
import styles from "./styles.module.scss";

const Exercises = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const exercises = useContext(ExercisesContext);

  const groupedExercises = exercises.reduce((newExercises, exercise) => {
    const type = exercise.type;
    const newExercise = {
      name: exercise.name,
      value: exercise.name,
    };

    newExercises.find((e) => e.name === type)?.items.push(newExercise) ||
      newExercises.push({ type: "group", name: type, items: [newExercise] });

    return newExercises;
  }, []);

  const handleChange = (e) => {
    setSelectedExercise(e);
    setShowPicker(false);
  };

  return (
    <div className={styles.container}>
      {showPicker ? (
        <Dropdown
          options={groupedExercises}
          name="exercises"
          placeholder="Pick an exercise"
          onChange={(e) => handleChange(e)}
          value={selectedExercise}
        />
      ) : (
        <button className={styles.button} onClick={() => setShowPicker(true)}>
          <img src={plus} alt="plus" />
          <span>Add an exercise</span>
        </button>
      )}
      <span>list all user's exercises here</span>
    </div>
  );
};

export default Exercises;
