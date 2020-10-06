import React from "react";
import { render, screen } from "@testing-library/react";

import RecyclingCategories from "./RecyclingCategories.jsx";

describe("<RecyclingCategories />", () => {
  // Mock localStorage item
  window.localStorage.getItem = () => "Hackney";

  test("Recycling categories page renders", () => {
    render(<RecyclingCategories />);
    screen.getByText(
      "Contact your local authority for other waste services and requests"
    );
  });
});
