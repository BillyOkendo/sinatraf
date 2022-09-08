import { NavLink } from "react-router-dom";

import React from "react";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/">
        <button className="btn">Home</button>
      </NavLink>

      <NavLink to="/working">
        <button className="btn">Products</button>
      </NavLink>

      <NavLink to="/reviews">
        <button className="btn">Reviews</button>
      </NavLink>
    </div>
  );
};
export default Navbar;
