import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PageNotFound from "./PageNotFound";
import * as SC from "./PageNotFound.styles.jsx";

test("button renders", () => {
  render(<SC.Button>Go to Home</SC.Button>);
  screen.getByText("Go to Home");
});

test("Home button renders to 404 page", () => {
  render(<PageNotFound />);
  screen.getByText("Go to Home");
});

/*
import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <SC.ErrorBg>
      <SC.Button>
        {" "}
        <Link to="/">Go to Home</Link>{" "}
      </SC.Button>
    </SC.ErrorBg>
  );
}*/
// "test": "react-scripts test",
