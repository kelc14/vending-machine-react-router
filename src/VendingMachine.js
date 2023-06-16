import React from "react";
import { NavLink } from "react-router-dom";
import "./VendingMachine.css";
import img from "./img/vending.jpg";

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <h1 className="VendingMachine-heading">
        What SNACKS Can I Get You TODAY?
      </h1>
      <img src={img} />
    </div>
  );
};

export default VendingMachine;
