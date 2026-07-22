import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LiveConnectSection } from "@/components/sections/live-connect/live-connect-section";

describe("LiveConnectSection", () => {
  it("renders the section header with 'Live Connect' title", () => {
    render(<LiveConnectSection />);
    expect(screen.getByText("Live Connect")).toBeInTheDocument();
  });

  it("renders 3 social cards", () => {
    render(<LiveConnectSection />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
  });

  it("renders LinkedIn link", () => {
    render(<LiveConnectSection />);
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
  });

  it("renders GitHub link", () => {
    render(<LiveConnectSection />);
    expect(screen.getByText("GitHub")).toBeInTheDocument();
  });

  it("renders WhatsApp link", () => {
    render(<LiveConnectSection />);
    expect(screen.getByText("WhatsApp")).toBeInTheDocument();
  });

  it("uses the dark variant styling", () => {
    render(<LiveConnectSection />);
    const section = screen.getByTestId("live-connect-section");
    expect(section).toHaveClass("bg-matte-black");
    expect(section).toHaveClass("text-off-white");
  });
});
