import React from "react";
import Day from "./Day.tsx";
import { Event } from "../App.tsx";

interface CalendarProps {
  nav: number;
  events: Event[];
  onDayClick: (date: string) => void;
}

const Calendar: React.FC<CalendarProps> = ({ nav, events, onDayClick }) => {
  const dt = new Date();
  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const paddingDays = firstDayOfMonth.getDay();

  const days = [];
  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    const dayString = `${month + 1}/${i - paddingDays}/${year}`;
    const eventForDay = events.find((event) => event.date === dayString);

    days.push(
      <Day
        key={i}
        day={i > paddingDays ? i - paddingDays : null}
        date={i > paddingDays ? dayString : ""}
        event={eventForDay}
        isCurrentDay={i - paddingDays === day && nav === 0}
        onClick={i > paddingDays ? onDayClick : undefined}
      />
    );
  }

  return <div id="calendar">{days}</div>;
};

export default Calendar;