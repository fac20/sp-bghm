import React from "react";
import * as SC from "./PageNotFound.styles.jsx";

export default function PageNotFound() {
  return (
    <SC.ErrorBg>
      <SC.Button>
        {" "}
        <a href="/">Go to Home</a>{" "}
      </SC.Button>
    </SC.ErrorBg>
  );
}
