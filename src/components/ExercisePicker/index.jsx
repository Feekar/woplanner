import React, { useState, useContext } from "react";
import plus from "../../content/images/plus.svg";
import ExercisesContext from "../../Context";
import { Dropdown } from "../";
import styles from "./styles.module.scss";

const ExercisePicker = ({ addExercise }) => {
  const [showPicker, setShowPicker] = useState(false);

  const allExercises = useContext(ExercisesContext);
  const groupedAllExercises = allExercises.reduce((newExercises, exercise) => {
    const type = exercise.type.toLowerCase();
    const newExercise = {
      name: exercise.name,
      value: exercise.name,
    };

    newExercises.find((e) => e.name === type)?.items.push(newExercise) ||
      newExercises.push({ type: "group", name: type, items: [newExercise] });

    return newExercises;
  }, []);

  const handleChange = (value) => {
    const type = allExercises.find((e) => e.name === value).type;
    addExercise(value, type);
    setShowPicker(false);
  };

  return (
    <>
      {showPicker ? (
        <Dropdown
          options={groupedAllExercises}
          name="exercises"
          placeholder="Pick an exercise"
          onChange={(e) => handleChange(e)}
        />
      ) : (
        <button className={styles.button} onClick={() => setShowPicker(true)}>
          <img src={plus} alt="plus" />
          <span>Add an exercise</span>
        </button>
      )}
    </>
  );
};

export default ExercisePicker;
