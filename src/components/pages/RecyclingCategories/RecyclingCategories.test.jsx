import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import RecyclingCategories from "./RecyclingCategories.jsx";

test("Recycling categories page renders", () => {
  jest
    .spyOn(RecyclingCategories, "useParams")
    .mockReturnValue({ borough: "Hackney" });
  render(<RecyclingCategories />);
  screen.getByText(
    "Contact your local authority for other waste services and requests"
  );
});
