import React, { useState, useEffect } from "react";
import { Toolbar, Week } from "./components";
import { firebase } from "./firebase";
import ExercisesContext from "./Context";

import styles from "./styles.module.scss";

function App() {
  const [exercises, setExercises] = useState([]);
  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    const storedWeeks = localStorage.getItem("weeks");
    if (storedWeeks) {
      setWeeks(JSON.parse(storedWeeks));
    } else {
      setWeeks([{ something: "123" }]);
    }
  }, []);

  useEffect(() => {
    const fetchExercises = async () => {
      const db = firebase.firestore();
      const data = await db.collection("exercises").get();
      setExercises(data.docs.map((doc) => doc.data()));
    };

    fetchExercises();
  }, []);

  useEffect(() => {
    localStorage.setItem("weeks", JSON.stringify(weeks));
  }, [weeks]);

  const handleUpdateWeeks = (type) => {
    const newWeeks = [...weeks];
    if (type === "add") {
      newWeeks.push({ something: "123" });
    } else if (type === "remove") {
      newWeeks.pop();
    }

    if (newWeeks.length > 16 || newWeeks.length < 1) {
      return;
    }

    setWeeks(newWeeks);
  };

  return (
    <div className={styles.App}>
      <Toolbar weeksRepeated={weeks.length} updateWeeks={handleUpdateWeeks} />
      <ExercisesContext.Provider value={exercises}>
        <main className={styles.weeks}>
          {weeks.map((week, index) => {
            return <Week week={week} key={index} />;
          })}
        </main>
        {/* <Weeks weeks={weeks} /> */}
      </ExercisesContext.Provider>
    </div>
  );
}

export default App;
