import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { NoiseOverlay } from "@/components/ui/noise-overlay";

describe("NoiseOverlay", () => {
  it("renders a div with the noise-overlay class", () => {
    render(<NoiseOverlay />);
    const overlay = screen.getByTestId("noise-overlay");
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass("noise-overlay");
  });

  it("has aria-hidden attribute for accessibility", () => {
    render(<NoiseOverlay />);
    const overlay = screen.getByTestId("noise-overlay");
    expect(overlay).toHaveAttribute("aria-hidden", "true");
  });

  it("has pointer-events-none to not block interactions", () => {
    render(<NoiseOverlay />);
    const overlay = screen.getByTestId("noise-overlay");
    expect(overlay).toHaveClass("pointer-events-none");
  });

  it("has fixed positioning to cover viewport", () => {
    render(<NoiseOverlay />);
    const overlay = screen.getByTestId("noise-overlay");
    expect(overlay).toHaveClass("fixed");
    expect(overlay).toHaveClass("inset-0");
  });
});
