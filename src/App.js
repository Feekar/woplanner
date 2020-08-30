import React, { useState, useEffect } from "react";
import { Toolbar, Weeks } from "./components";
import { firebase } from "./firebase";
import ExercisesContext from "./Context";

import "./App.css";

function App() {
  const [weeksRepeated, setWeeksRepeated] = useState(1);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const db = firebase.firestore();
      const data = await db.collection("exercises").get();
      setExercises(data.docs.map((doc) => doc.data()));
    };

    fetchExercises();
  }, []);

  const handleUpdateWeeksRepeated = (weeks) => {
    setWeeksRepeated(weeks);
  };

  return (
    <div className="App">
      <Toolbar
        weeksRepeated={weeksRepeated}
        updateWeeksRepeated={handleUpdateWeeksRepeated}
      />
      <ExercisesContext.Provider value={exercises}>
        <Weeks weeksRepeated={weeksRepeated} />
      </ExercisesContext.Provider>
      cardio sport strength flexibility
    </div>
  );
}

export default App;

//users: [
//  id: "421421412f"
//  name: "jonas",
//  weeks: [
//    weekNumber: 1,
//    days: [
//      id: "2312412hasfjkh24" //för att uppdatera mot ?
//      name: "MONDAY",
//      exercises: [
//         exercise_id: "34214124"
//         notes: "12kg"
//      ],
//      name: "TUESDAY",
//      exercises: [],
//    ]
//  ]
//]

// function Week(weekNumber = "", days = []) {
//   this.weekNumber = weekNumber;
//   this.days = days;
// }

// function Day(name = "", exercises = []) {
//   this.name = name;
//   this.exercises = exercises;
// }
