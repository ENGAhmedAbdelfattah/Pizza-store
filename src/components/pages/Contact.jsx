/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
import React, { Component } from "react";
class Contact extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container">
          <h2 className="text-center text-info text-uppercase my-3">Contact</h2>
          <div className="row text-center justify-content-center align-items-center">
            <div
              className="col-sm-5 rounded-3 m-3"
              style={{
                boxShadow: "0 0 15px 2px rgba(255,0,0,0.30)",
              }}>
              <a
                className="d-block p-5"
                href="https://www.facebook.com/"
                style={{ color: "#1877f2" }}>
                <i className="fab fa-facebook-square fa-5x"></i>
              </a>
            </div>
            <div
              className="col-sm-5 rounded-3 m-3"
              style={{
                boxShadow: "0 0 15px 2px rgba(255,0,0,0.30)",
              }}>
              <a
                className="d-block p-5"
                href="https://www.linkedin.com/"
                style={{ color: "#0077b5" }}>
                <i className="fab fa-linkedin fa-5x"></i>
              </a>
            </div>
          </div>
          <div className="row text-center justify-content-center align-items-center">
            <div
              className="col-sm-5 rounded-3 m-3"
              style={{
                boxShadow: "0 0 15px 2px rgba(255,0,0,0.30)",
              }}>
              <a
                className="d-block p-5"
                href="https://web.whatsapp.com/"
                style={{ color: "#075e54" }}>
                <i className="fab fa-whatsapp fa-5x"></i>
              </a>
            </div>
            <div
              className="col-sm-5 rounded-3 m-3"
              style={{
                boxShadow: "0 0 15px 2px rgba(255,0,0,0.30)",
                color: "#333",
              }}>
              <a
                className="d-block p-5"
                href="https://github.com/"
                style={{ color: "#333" }}>
                <i className="fab fa-github fa-5x"></i>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
