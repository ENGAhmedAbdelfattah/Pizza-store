/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */

// react Component
import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";

// About Component

class About extends Component {
  state = {
    AboutList: [
      { id: 10, name: "Our Team", path: "OurTeam" },
      { id: 11, name: "Our Company", path: "OurCompany" },
    ],
  };
  classes = {
    active: "text-danger nav-link text-decoration-none fs-6",
    notActive: "text-dark nav-link text-decoration-none fs-6",
  };
  render() {
    return (
      <>
        <div className="container">
          <h2 className="text-center text-info text-uppercase my-3">About</h2>
          <div className="container-fluid">
            <div className="row">
              <ul className="col-sm-2 list-unstyled list-group">
                {this.state.AboutList.map((el) => (
                  <li key={el.id} className="list-group-item py-1">
                    <NavLink
                      to={el.path}
                      className={(navData) =>
                        navData.isActive ? this.classes.active : this.classes.notActive
                      }>
                      {el.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="col-sm-8">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
