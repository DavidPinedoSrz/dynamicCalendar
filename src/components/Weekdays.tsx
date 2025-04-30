import React from "react";

const Weekdays: React.FC = () => {
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return (
    <div id="weekdays">
      {weekdays.map((day) => (
        <div key={day}>{day}</div>
      ))}
    </div>
  );
};

export default Weekdays;