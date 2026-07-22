import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AboutSection } from "@/components/sections/about/about-section";

describe("AboutSection", () => {
  it("renders the section header with 'About Me' title", () => {
    render(<AboutSection />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("renders the display name", () => {
    render(<AboutSection />);
    expect(screen.getByTestId("about-name")).toBeInTheDocument();
  });

  it("renders the professional title", () => {
    render(<AboutSection />);
    expect(screen.getByTestId("about-title")).toBeInTheDocument();
  });

  it("renders the bio text", () => {
    render(<AboutSection />);
    expect(screen.getByTestId("about-bio")).toBeInTheDocument();
  });

  it("uses the dark variant styling", () => {
    render(<AboutSection />);
    const section = screen.getByTestId("about-section");
    expect(section).toHaveClass("bg-matte-black");
    expect(section).toHaveClass("text-off-white");
  });
});
