/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
import React, { Component } from "react";
import Joi from "joi-browser";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

// useHooks with class Components && changed export
function withUseHook(Component) {
  return (props) => (
    <Component {...props} params={useParams()} navigate={useNavigate()} />
  );
}

class FormProduct extends Component {
  state = {
    name: "",
    price: "",
    errors: {},
  };
  cloneData = "";
  async componentDidMount() {
    const idParams = this.props.params.id;
    if (idParams !== "new") {
      const { data } = await axios.get(
        `http://localhost:3000/Protects/` + idParams
      );
      // Clone
      const state = { ...this.state };
      // Edite
      state.id = data.id;
      state.name = data.name;
      state.price = data.price;
      // setState
      this.setState(state);
    }
  }

  schema = {
    name: Joi.string().required(),
    price: Joi.number().required(),
    id: Joi.number(),
  };

  handleChange = (e) => {
    // clone
    let state = { ...this.state };
    // edite
    state[e.currentTarget.name] = e.currentTarget.value;
    // setState
    this.setState(state);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const errors = this.validate();
    if (Object.keys(errors).length !== 0) {
      return null;
    }
    // Call backend
    // ADD
    if (this.props.params.id === "new") {
      this.props.onHandleAdd(this.state.name, this.state.price);
    } else {
      this.props.onHandleEdit(this.state.id, this.state.name, this.state.price);
    }

    // EDIT

    this.props.navigate("/Admin");
  };
  validate = () => {
    // Creat errors (alt Clone)
    const errors = {};
    let state = { ...this.state };
    delete state.errors;
    // Edit (if validate or not)
    const res = Joi.validate(state, this.schema, { abortEarly: false });
    if (res.error !== null) {
      for (const error of res.error.details) {
        errors[error.path] = error.message;
      }
    }
    if (errors === null) {
      if (this.props.params.id === "new") {
        if (this.props.protects.map((el) => el.name !== this.state.name)) {
          return null;
        }
      } else {
        return null;
      }
    }
    if (this.props.params.id === "new") {
      this.props.protects.map((el) => {
        if (el.name === this.state.name) {
          errors.name = "This name is Add before";
        }
      });
    }
    // setState
    this.setState({ errors });
    return errors;
  };
  render() {
    return (
      <>
        <div className="container">
          <h2 className="text-center text-info">
            {this.props.params.id === "new" ? "Add Product" : "Edit Product"}
          </h2>
          <form onSubmit={this.handleSubmit} method="post">
            <div className="mb-3">
              <label htmlFor="Name-first" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="Name-first"
                aria-describedby="emailHelpId"
                placeholder="Enter protect name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              {this.state.errors.name && (
                <div className="alert alert-danger">
                  {this.state.errors.name}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="Price-first" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                name="price"
                id="Price-first"
                placeholder="Enter your Password"
                value={this.state.price}
                onChange={this.handleChange}
              />
              {this.state.errors.price && (
                <div className="alert alert-danger">
                  {this.state.errors.price}
                </div>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              {this.props.params.id === "new" ? "Add" : "Edit"}
            </button>
          </form>
        </div>
      </>
    );
  }
}

// useHooks with class Components
export default withUseHook(FormProduct);
