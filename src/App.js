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
    </div>
  );
}

export default App;
