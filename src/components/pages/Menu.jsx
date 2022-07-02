/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */

import React, { Component } from "react";
import Shopping from "./Shopping";
class Menu extends Component {
  render() {
    // this.props.protects
    return (
      <>
        <div className="container">
          <h2 className="text-center text-info text-uppercase my-3">Menu Table</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th colSpan="{2}">Price</th>
              </tr>
            </thead>
            <tbody>
              {this.props.protects.map((el) => {
                return (
                  <tr key={el.id + 100}>
                    <td scope="row">{el.name}</td>
                    <td>{el.price}</td>
                    <td>
                      <Shopping
                        protectMenu={el}
                        onHandleClickIconMenu={this.props.onHandleClickIcon}
                      />
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

export default Menu;
