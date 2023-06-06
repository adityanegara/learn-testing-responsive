import { render, screen } from "@testing-library/react";
import CustomHooks from "./CustomHooks";
import { resizeScreenSize } from "../../helper/resizeScreenSize";
import '@testing-library/jest-dom'

describe("App", () => {
  it("render Hello Mobile text if the screen size is mobile", () => {
    resizeScreenSize(200);
    render(<CustomHooks />);
    const spanElement = screen.getByText("Hello Mobile");
    expect(spanElement).toBeInTheDocument();
  });
  it("render Hello Tablet text if the screen size is tablet", () =>{
    resizeScreenSize(400);
    render(<CustomHooks/>)
    const spanElement = screen.getByText("Hello Tablet");
    expect(spanElement).toBeInTheDocument()
  })
  it("render Hello Desktop text if the screen size is desktop", () =>{
    resizeScreenSize(1000);
    render(<CustomHooks/>)
    const spanElement = screen.getByText("Hello Desktop");
    expect(spanElement).toBeInTheDocument()
  })
});
