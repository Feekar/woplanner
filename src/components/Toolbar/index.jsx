import React from "react";

const Toolbar = ({ weeksRepeated, updateWeeksRepeated }) => {
  const maxWeeks = 16;
  const minWeeks = 1;

  const handleClick = (type) => {
    let newWeeksRepeated;
    if (type === "add") {
      newWeeksRepeated = weeksRepeated + 1;
      if (newWeeksRepeated > maxWeeks) {
        return;
      }
    } else {
      newWeeksRepeated = weeksRepeated - 1;
      if (newWeeksRepeated < minWeeks) {
        return;
      }
    }

    updateWeeksRepeated(newWeeksRepeated);
  };

  return (
    <div>
      <button onClick={() => handleClick("subtract")}>-</button>
      {weeksRepeated}
      <button onClick={() => handleClick("add")}>+</button> weeks repeated
    </div>
  );
};

export default Toolbar;
