/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
import React, { Component } from "react";
import Protect from "./pages/NestedShoppingCard/Protect";

class ShoppingCart extends Component {
  render() {
    const {
      protects,
      onHandleReset,
      onHandleDelete,
      onIncrementHandler,
      onHandleClickIcon,
    } = this.props;
    return (
      <>
        <div className="container">
          <h1 className="text-center fs-2 text-info text-uppercase my-3">
            Shopping Cart
          </h1>
          <button
            onClick={() => onHandleReset()}
            className="btn btn-secondary btn-sm mb-3">
            Reset
          </button>
        </div>
        {protects
          .filter((el) => el.isShopped)
          .map((el) => (
            <Protect
              key={el.id}
              protect={el}
              onDelete={onHandleDelete}
              onIncrementHandler={onIncrementHandler}
              onHandleClickIcon={onHandleClickIcon}
            />
          ))}
      </>
    );
  }
}

export default ShoppingCart;
