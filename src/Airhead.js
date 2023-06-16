import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Airhead.css";

const Airhead = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipImage = () => {
    setIsFlipped(() => true);
  };

  const showAirhead = () => {
    return (
      <img
        src="https://i.gifer.com/origin/0f/0fd379b81bc8023064986c9c45f22253_w200.gif"
        style={{ width: "400px" }}
      />
    );
  };

  const showNotAirhead = () => {
    console.log(isFlipped);
    return (
      <img
        onClick={flipImage}
        src="https://media.tenor.com/S37-PDdVmwIAAAAd/air-head-suit.gif"
      />
    );
  };

  return (
    <>
      <h1 className="Airhead-heading">Pop the balloon for a surprise</h1>
      {!isFlipped ? showNotAirhead() : showAirhead()}

      <nav className="Airhead-nav">
        <Link to="/">Go Back</Link>
      </nav>
    </>
  );
};

export default Airhead;
