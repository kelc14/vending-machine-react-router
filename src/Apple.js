import React from "react";
import "./Apple.css";
import { Link } from "react-router-dom";

const Apple = () => {
  return (
    <>
      <h1 className="Apple-heading">JK... we only do candy here!</h1>
      <img src="https://media2.giphy.com/media/LqgrRiLbCwrCcopc79/giphy.gif" />
      <nav className="Apple-nav">
        <Link to="/">Go Back</Link>
      </nav>
    </>
  );
};

export default Apple;
