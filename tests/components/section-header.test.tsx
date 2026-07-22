import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SectionHeader } from "@/components/ui/section-header";

describe("SectionHeader", () => {
  it("renders the title text", () => {
    render(<SectionHeader title="About Me" />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("renders the gold motif element", () => {
    render(<SectionHeader title="About Me" />);
    const motif = screen.getByTestId("gold-motif");
    expect(motif).toBeInTheDocument();
    expect(motif).toHaveClass("gold-motif");
  });

  it("uses uppercase tracking for the title", () => {
    render(<SectionHeader title="Tech Stack" />);
    const header = screen.getByRole("heading");
    expect(header).toHaveClass("uppercase");
    expect(header).toHaveClass("tracking-widest");
  });

  it("accepts additional className", () => {
    render(<SectionHeader title="Test" className="my-custom" />);
    const container = screen.getByTestId("section-header");
    expect(container).toHaveClass("my-custom");
  });
});
