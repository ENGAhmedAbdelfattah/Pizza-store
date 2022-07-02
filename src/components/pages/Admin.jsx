/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";
class Admin extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container">
          <h2 className="text-info text-center text-uppercase my-3">Admin</h2>
          <div className="btn btn-primary">
            <Link
              className="text-white text-decoration-none"
              to={"/FormProduct/new"}>
              Add
            </Link>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th colSpan="{3}">Price</th>
              </tr>
            </thead>
            <tbody>
              {this.props.protects.map((el) => {
                return (
                  <tr key={el.id + 10}>
                    <td scope="row">{el.name}</td>
                    <td>{el.price}</td>
                    <td>
                      <Link to={`/FormProduct/` + el.id}>
                        <i
                          style={{ cursor: "pointer" }}
                          className="fas fa-pen-to-square"></i>
                      </Link>
                    </td>
                    <td>
                      <i
                        onClick={() => this.props.onHandleDelete(el)}
                        style={{ cursor: "pointer" }}
                        className="fas fa-trash"></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Admin;
