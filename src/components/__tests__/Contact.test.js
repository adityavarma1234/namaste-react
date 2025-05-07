import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us, Page Test Case", () => {
  //   beforeAll(() => {
  //     console.log("before all");
  //   });

  //   beforeEach(() => {
  //     console.log("before each");
  //   });

  //   afterAll(() => {
  //     console.log("after all");
  //   });

  //   afterEach(() => {
  //     console.log("after each");
  //   });

  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Should include submit text ", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });
});
