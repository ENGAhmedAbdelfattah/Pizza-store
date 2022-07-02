/*
 *   Copyright (c) 2022
 *   All rights reserved.
 */
import React from "react";
import { useParams } from "react-router-dom";

function ProtectDetails(props) {
  const params = useParams();

  const protect = props.protects.filter(
    (el) => el.id === parseInt(params.id)
  )[0];
  return (
    <>
      <div className="container">
        <h1 className="my-3">
          ProtectDetails{" "}
          <span className="badge bg-success">{protect.name}</span>
        </h1>
        <p>
          Protect No <span className="badge bg-info">{protect.id}</span>
        </p>
        <p>
          Protect count <span className="badge bg-info">{protect.count}</span>
        </p>
      </div>
    </>
  );
}

export default ProtectDetails;
