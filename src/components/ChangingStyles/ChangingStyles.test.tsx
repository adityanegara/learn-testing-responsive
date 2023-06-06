import { render, screen } from "@testing-library/react";
import { resizeScreenSize } from "../../helper/resizeScreenSize";
import ChangingStyles from "./ChangingStyles";
import '@testing-library/jest-dom'


describe("ChangingStyles", () => {
  it("show blue background when screen is desktop", () => {
    resizeScreenSize(1000);
    render(<ChangingStyles />);
    const button = screen.getByTestId("delete-button");
    expect(button).toHaveStyle("background-color: blue");
  });
});
