import React, { useContext } from "react";
import { UserExercises } from "../";
import { ExercisePicker } from "../";

import styles from "./styles.module.scss";

const Exercises = () => {
  // const [selectedExercise, setSelectedExercise] = useState(null);
  const exercises = [
    {
      id: "123",
      name: "Push ups",
      type: "strength",
    },
    {
      id: "1234",
      name: "Pull ups",
      type: "strength",
    },
    {
      id: "123555",
      name: "Stretch",
      type: "flexibility",
    },
  ];

  return (
    <div className={styles.container}>
      <ExercisePicker />

      <UserExercises exercises={exercises} />
    </div>
  );
};

export default Exercises;
