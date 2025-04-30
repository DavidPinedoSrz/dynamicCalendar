import React from "react";

interface HeaderProps {
  nav: number;
  setNav: React.Dispatch<React.SetStateAction<number>>;
}

const Header: React.FC<HeaderProps> = ({ nav, setNav }) => {
  const handleNext = () => setNav(nav + 1);
  const handleBack = () => setNav(nav - 1);

  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() + nav);
  const monthYear = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div id="header">
      <div id="monthDisplay">{monthYear}</div>
      <div className="button-container">
        <button id="backButton" className="nav-button" onClick={handleBack} aria-label="Previous month"></button>
        <button id="nextButton" className="nav-button" onClick={handleNext} aria-label="Next month"></button>
      </div>
    </div>
  );
};

export default Header;