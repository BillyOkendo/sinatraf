import { NavLink } from "react-router-dom";

import React from "react";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/">
        <button className="btn">Home</button>
      </NavLink>

      <NavLink to="/working">
        <button className="btn">Attendants</button>
      </NavLink>

      <NavLink to="/new">
        <button className="btn">Add New Attendants</button>
      </NavLink>
    </div>
  );
};
export default Navbar;
