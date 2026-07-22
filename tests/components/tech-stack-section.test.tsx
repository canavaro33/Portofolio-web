import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TechStackSection } from "@/components/sections/tech-stack/tech-stack-section";

describe("TechStackSection", () => {
  it("renders the section header with 'Tech Stack' title", () => {
    render(<TechStackSection />);
    expect(screen.getByText("Tech Stack")).toBeInTheDocument();
  });

  it("renders tech stack items", () => {
    render(<TechStackSection />);
    const items = screen.getByTestId("tech-stack-grid");
    expect(items).toBeInTheDocument();
    expect(items.children.length).toBeGreaterThan(0);
  });

  it("uses the light variant styling", () => {
    render(<TechStackSection />);
    const section = screen.getByTestId("tech-stack-section");
    expect(section).toHaveClass("bg-off-white");
    expect(section).toHaveClass("text-matte-black");
  });

  it("renders technology names", () => {
    render(<TechStackSection />);
    // Should render at least some of the common tech items
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
  });
});
