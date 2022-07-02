/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */

import React, { Component } from "react";
import Joi from "joi-browser";
class Login extends Component {
  state = {
    emailFirst: "",
    passFirst: "",
    errors: {},
  };

  schema = {
    emailFirst: Joi.string().required(),
    passFirst: Joi.string().required(),
  };

  handleChange = (e) => {
    // clone
    let cloneState = { ...this.state };
    // edite
    cloneState[e.currentTarget.name] = e.currentTarget.value;
    // setState
    this.setState(cloneState);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    if (errors) return;
    console.log("handleSubmit");
  };

  validate = () => {
    // Creat errors (alt Clone)
    const errors = {};
    let cloneState = { ...this.state };
    delete cloneState.errors;
    // Edit (if validate or not)
    const res = Joi.validate(cloneState, this.schema, { abortEarly: false });
    if (res.error === null) return null;
    for (const error of res.error.details) {
      errors[error.path] = error.message;
    }
    // setState
    this.setState({ errors });
    return errors;
  };

  /*
  validate = () => {
    // Creat errors (alt Clone)
    const errors = {};
    // Edit (if validate or not)
    if (this.state.emailFirst.trim() === "") {
      errors.emailFirst = "Email is required";
    }
    if (this.state.passFirst.trim() === "") {
      errors.passFirst = "Password is required";
    } else if (this.state.passFirst.trim().length <= 8) {
      errors.passFirst = "Password length less than 8 character";
    }
    // setState
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      return null;
    };
    return errors;
  };
  */
  render() {
    return (
      <>
        <div className="container">
          <h2 className="text-center text-info text-uppercase my-3">Login</h2>
          <form onSubmit={this.handleSubmit} method="post">
            <div className="mb-3">
              <label htmlFor="email-first" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name="emailFirst"
                id="email-first"
                aria-describedby="emailHelpId"
                placeholder="Enter your Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              {this.state.errors.emailFirst && (
                <div className="alert alert-danger">
                  {this.state.errors.emailFirst}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="pass-first" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="passFirst"
                id="pass-first"
                placeholder="Enter your Password"
                value={this.state.pass}
                onChange={this.handleChange}
              />
              {this.state.errors.passFirst && (
                <div className="alert alert-danger">
                  {this.state.errors.passFirst}
                </div>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
