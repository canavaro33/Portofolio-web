import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders the About Me section", () => {
    render(<HomePage />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("renders the Tech Stack section", () => {
    render(<HomePage />);
    expect(screen.getByText("Tech Stack")).toBeInTheDocument();
  });

  it("renders the Live Connect section", () => {
    render(<HomePage />);
    expect(screen.getByText("Live Connect")).toBeInTheDocument();
  });

  it("uses a main element as the page container", () => {
    render(<HomePage />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });

  it("contains the bento grid layout", () => {
    render(<HomePage />);
    const grid = screen.getByTestId("bento-grid");
    expect(grid).toBeInTheDocument();
    expect(grid).toHaveClass("grid");
  });
});
