import { render, screen } from "@testing-library/react";
import { resizeScreenSize } from "../../helper/resizeScreenSize";
import EmotionMediaQuery from "./EmotionMediaQuery";
import EmotionParameter from "./EmotionParameter";
import '@testing-library/jest-dom'

describe("EmotionMediaQuery", () =>{
    it("show blue background when screen is desktop", () =>{
      resizeScreenSize(1000);
      render(<EmotionMediaQuery/>)
      const button = screen.getByText('Testing')
      expect(button).toHaveStyle('background-color: red')
    })
})

describe("EmotionParameter", () =>{
  it("should show orange background when screen is desktop", () => {
    resizeScreenSize(1000)
    render(<EmotionParameter/>)
    const button = screen.getByText('Testing')
    expect(button).toHaveStyle('background-color: orange')
  })

  it("should show steelblue background when screen is mobile", () => {
    resizeScreenSize(300)
    render(<EmotionParameter/>)
    const button = screen.getByText('Testing')
    expect(button).toHaveStyle('background-color: steelblue')
  })
})
  