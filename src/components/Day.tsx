import React from "react";
import { Event } from "../App.tsx";

interface DayProps {
  day: number | null;
  date: string;
  event?: Event;
  isCurrentDay: boolean;
  onClick?: (date: string) => void;
}

const Day: React.FC<DayProps> = ({ day, date, event, isCurrentDay, onClick }) => {
  const handleClick = () => {
    if (onClick) onClick(date);
  };

  return (
    <div
      className={`day ${day ? "" : "padding"} ${isCurrentDay ? "currentDay" : ""}`}
      onClick={handleClick}
    >
      {day && <span>{day}</span>}
      {event && <div className="event">{event.title}</div>}
    </div>
  );
};

export default Day;