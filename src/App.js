import React, { useState } from "react";
import { Toolbar, Weeks } from "./components";

import "./App.css";

function App() {
  const [weeksRepeated, setWeeksRepeated] = useState(1);

  const handleUpdateWeeksRepeated = (weeks) => {
    setWeeksRepeated(weeks);
  };

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
