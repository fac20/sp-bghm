import React from "react";
import { Link } from "react-router-dom";
import * as SC from "./PageNotFound.styles.jsx";

export default function PageNotFound() {
  return (
    <SC.ErrorBg>
      <SC.Button>
        {" "}
        <Link to="/">Go to Home</Link>{" "}
      </SC.Button>
    </SC.ErrorBg>
  );
}
