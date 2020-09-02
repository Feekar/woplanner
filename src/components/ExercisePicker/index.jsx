import React, { useState, useContext } from "react";
import plus from "../../content/images/plus.svg";
import ExercisesContext from "../../Context";
import { Dropdown } from "../";
import styles from "./styles.module.scss";

const ExercisePicker = () => {
  const [showPicker, setShowPicker] = useState(false);

  const allExercises = useContext(ExercisesContext);

  const groupedAllExercises = allExercises.reduce((newExercises, exercise) => {
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
    //  generate an id on  client, add exercise to this day in state, push to firebase
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
          // value={selectedExercise}
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
