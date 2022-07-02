/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */

import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
  let classes = {
    active: "text-warning nav-link",
    notActive: "text-danger nav-link",
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Home">
          PIZZA STORE
        </Link>
        <span
          className={
            props.count === 0
              ? "badge bg-warning me-3"
              : "badge bg-primary me-3"
          }>
          <i className="fas fa-cart-plus text-white me-1"></i>
          {props.count}
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              className={(navData) =>
                navData.isActive ? classes.active : classes.notActive
              }
              aria-current="page"
              to="/Home">
              Home
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive ? classes.active : classes.notActive
              }
              to="/Menu">
              Menu
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive ? classes.active : classes.notActive
              }
              to="/ShoppingCart">
              ShoppingCart
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive ? classes.active : classes.notActive
              }
              to="/Contact">
              Contact
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive ? classes.active : classes.notActive
              }
              to="/About">
              About
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive ? classes.active : classes.notActive
              }
              to="/Login">
              Login
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive ? classes.active : classes.notActive
              }
              to="/Admin">
              Admin
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
