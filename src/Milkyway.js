import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Milkyway.css";

const Milkyway = () => {
  return (
    <>
      <h1 className="Milkyway-heading">Milkwayyyy</h1>
      <img src="https://static1.squarespace.com/static/5eb45ca1ceb32615ae9263f4/5eb4654af49e746a6b01cbd9/5eb468763e3fb45bd2b06d15/1596504938940/giphy.gif?format=1500w" />
      <nav className="Milkyway-nav">
        <Link to="/">Go Back</Link>
      </nav>
    </>
  );
};

export default Milkyway;
