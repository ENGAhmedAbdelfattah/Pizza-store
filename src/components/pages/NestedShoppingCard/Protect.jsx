/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Protect extends Component {
  state = {};

  getClasses() {
    let classes =
      this.props.protect.count === 0
        ? "badge bg-warning py-2 px-3 ms-2"
        : "badge bg-primary py-2 px-3 ms-2";
    return classes;
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col col-sm-2 col-md-1">
              <span>
                <Link
                  className="text-decoration-none"
                  style={{ color: "red", fontSize: "20px" }}
                  to={`/protect-details/${this.props.protect.id}`}>
                  {this.props.protect.name}
                </Link>
              </span>
            </div>
            <div className="col col-sm-2 col-md-1">
              <apan className={this.getClasses()}>
                {this.props.protect.count}
              </apan>
            </div>
            <div className="col col-sm-2 col-md-1">
              <button
                onClick={() =>
                  this.props.onIncrementHandler(1, this.props.protect)
                }
                className="btn btn-primary ms-3 btn-sm">
                +
              </button>
            </div>
            <div className="col col-sm-2 col-md-1">
              <i
                style={{ cursor: "pointer" }}
                onClick={() => this.props.onHandleClickIcon(this.props.protect)}
                className="fas fa-trash fa-2x"></i>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Protect;
