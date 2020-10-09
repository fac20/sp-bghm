import React from "react";
import MoreInfo from "./MoreInfo.jsx";
import { render, screen, fireEvent } from "@testing-library/react";

describe("<MoreInfo />", () => {
  // Mock params from url
  const useParams = () => {
    return { borough: "haringey", material: "plastic" };
  };

  test("The More Info page displays all sections", () => {
    render(<MoreInfo />);
    screen.getByText("What's recyclable?");
    screen.getByText("Where can I recycle");
    screen.getByText("What happens to my recycled");
    screen.getByText("The impact of recycling");
  });
});
