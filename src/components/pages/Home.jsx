/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
import React, { Component } from "react";
class Home extends Component {
  state = {
    srcUrl: "img/pizza-1.jpg",
  };
  render() {
    return (
      <>
        <div style={{backgroundImage: `url(${this.state.srcUrl})`,backgroundRepeat: 'no-repeat', backgroundSize:'cover', width: "100%", height: "calc(100vh - 56px)"}}>
          <h2
            className="text-center fw-bold text-uppercase pt-3 display-4"
            style={{ color: "#FA6341",textShadow:"0 0 2px 10px rgba(0,0,5px,1)", textEmphasisStyle:"circle" }}>
            Pizza Store
          </h2>
        </div>
      </>
    );
  }
}

export default Home;
