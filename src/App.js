import React, { useState, useEffect } from "react";
import { Toolbar, Week, Day } from "./components";
import { firebase } from "./firebase";
import ExercisesContext from "./Context";

import styles from "./styles.module.scss";

function WeekObj() {
  this.days = [
    {
      name: "MONDAY",
      exercises: [],
    },
    {
      name: "TUESDAY",
      exercises: [],
    },
    {
      name: "WEDNESDAY",
      exercises: [],
    },
    {
      name: "THURSDAY",
      exercises: [],
    },
    {
      name: "FRIDAY",
      exercises: [],
    },
    {
      name: "SATURDAY",
      exercises: [],
    },
    {
      name: "SUNDAY",
      exercises: [],
    },
  ];
}

function App() {
  const [exercises, setExercises] = useState([]);
  const [weeks, setWeeks] = useState([]);

  useEffect(() => {
    const storedWeeks = localStorage.getItem("weeks");
    if (storedWeeks) {
      setWeeks(JSON.parse(storedWeeks));
    } else {
      setWeeks([new WeekObj()]);
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

  const handleAddRemoveWeeks = (type) => {
    const newWeeks = [...weeks];
    if (type === "add") {
      newWeeks.push(new WeekObj());
    } else if (type === "remove") {
      newWeeks.pop();
    }

    if (newWeeks.length > 16 || newWeeks.length < 1) {
      return;
    }

    setWeeks(newWeeks);
  };

  const handleUpdateUserExercises = (exercises, weekIndex, dayName) => {
    const newWeeks = [...weeks];

    const newDays = newWeeks[weekIndex].days.map((day) => {
      if (day.name === dayName) {
        day.exercises = exercises;
      }

      return day;
    });

    newWeeks[weekIndex].days = newDays;
    setWeeks(newWeeks);
  };

  return (
    <div className={styles.App}>
      <Toolbar
        weeksRepeated={weeks.length}
        addRemoveWeeks={handleAddRemoveWeeks}
      />
      <ExercisesContext.Provider value={exercises}>
        <main className={styles.weeks}>
          {weeks.map((week, index) => {
            return (
              <Week week={week} weekNumber={index} key={index}>
                {week.days.map((day, dayIndex) => (
                  <Day
                    updateUserExercises={handleUpdateUserExercises}
                    day={day}
                    week={index}
                    key={index + day.name}
                  />
                ))}
              </Week>
            );
          })}
        </main>
        {/* <Weeks weeks={weeks} /> */}
      </ExercisesContext.Provider>
    </div>
  );
}

export default App;
