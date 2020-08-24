import React, { useState } from "react";
import { Toolbar, Weeks } from "./components";

import "./App.css";

function Week(weekNumber = "", days = []) {
  this.weekNumber = weekNumber;
  this.days = days;
}

function Day(name = "", exercises = []) {
  this.name = name;
  this.exercises = exercises;
}

function App() {
  const [weeksRepeated, setWeeksRepeated] = useState(1);

  console.log(process.env.REACT_APP_API_KEY);

  const handleUpdateWeeksRepeated = (weeks) => {
    setWeeksRepeated(weeks);
  };

  //   const workout = {
  //     weeks: [
  //       {
  //         weekNumber: 1,
  //         days: [
  //           {
  //             name: "MONDAY",
  //             exercises: [
  //               {
  //                 name: "",
  //                 type: "strength"
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         weekNumber: 2,
  //         days: []
  //       },
  //       {
  //         weekNumber: 3,
  //         days: []
  //       },
  //     ]
  // }

  return (
    <div className="App">
      <Toolbar
        weeksRepeated={weeksRepeated}
        updateWeeksRepeated={handleUpdateWeeksRepeated}
      />
      <Weeks weeksRepeated={weeksRepeated} />
      cardio sport strength flexibility
    </div>
  );
}

export default App;
