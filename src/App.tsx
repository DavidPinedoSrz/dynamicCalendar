import React, { useState} from "react";
import Calendar from "./components/Calendar.tsx";
import Header from "./components/Header.tsx";
import Modal from "./components/Modal.tsx";
import Weekdays from "./components/Weekdays.tsx";

import "./index.css";

export interface Event {
  date: string;
  title: string;
}

const App: React.FC = () => {
  const [events, setEvents] = useState<Event[]>(
    JSON.parse(localStorage.getItem("events") || "[]")
  );
  const [nav, setNav] = useState(0);
  const [clicked, setClicked] = useState<string | null>(null);

  const handleSaveEvent = (title: string) => {
    const newEvent = { date: clicked!, title };
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setClicked(null);
  };

  const handleDeleteEvent = () => {
    const updatedEvents = events.filter((event) => event.date !== clicked);
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setClicked(null);
  };

  return (
    <div id="container">
      <Header nav={nav} setNav={setNav} />
      <Weekdays />
      <Calendar
        nav={nav}
        events={events}
        onDayClick={setClicked}
      />
      {clicked && (
        <Modal
          clicked={clicked}
          events={events}
          onSave={handleSaveEvent}
          onDelete={handleDeleteEvent}
          onClose={() => setClicked(null)}
        />
      )}
      <footer className="attribution">
       <p>Versioned to Typescript and React by David Pinedo Srz.</p>
        <div className="social-links">
          <a href="https://linkedin.com/in/luis-david-pinedo-suárez-8832a5298" target="_blank" rel="noopener noreferrer">
            <img src="../images/linkedin-logo.png" alt="LinkedIn" width="100" height="100" />
          </a>
          <a href="https://github.com/DavidPinedoSrz" target="_blank" rel="noopener noreferrer">
            <img src="../images/github-logo.png" alt="GitHub" width="100" height="100" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;