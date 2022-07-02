/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
import React, { Component } from "react";

class Shopping extends Component {
  state = {};
  handleClassIcon = () => {
    let classIcone = this.props.protectMenu.isShopped
      ? "fas fa-cart-plus text-dark"
      : "fas fa-cart-plus text-secondary";
    return classIcone;
  };
  render() {
    return (
      <>
        <i
          onClick={() => this.props.onHandleClickIconMenu(this.props.protectMenu)}
          style={{ cursor: "pointer" }}
          className={this.handleClassIcon()}></i>
      </>
    );
  }
}

export default Shopping;
