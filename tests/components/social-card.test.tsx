import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SocialCard } from "@/components/ui/social-card";

describe("SocialCard", () => {
  const defaultProps = {
    label: "LinkedIn",
    href: "https://linkedin.com/in/test",
    platform: "linkedin" as const,
  };

  it("renders with the correct label", () => {
    render(<SocialCard {...defaultProps} />);
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
  });

  it("renders an anchor with the correct href", () => {
    render(<SocialCard {...defaultProps} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://linkedin.com/in/test");
  });

  it("opens link in a new tab", () => {
    render(<SocialCard {...defaultProps} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("has gold hover border class", () => {
    render(<SocialCard {...defaultProps} />);
    const link = screen.getByRole("link");
    expect(link).toHaveClass("gold-border-hover");
  });

  it("renders platform icon", () => {
    render(<SocialCard {...defaultProps} />);
    const icon = screen.getByTestId("social-icon-linkedin");
    expect(icon).toBeInTheDocument();
  });

  it("renders GitHub variant", () => {
    render(
      <SocialCard
        label="GitHub"
        href="https://github.com/test"
        platform="github"
      />
    );
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByTestId("social-icon-github")).toBeInTheDocument();
  });

  it("renders WhatsApp variant", () => {
    render(
      <SocialCard
        label="WhatsApp"
        href="https://wa.me/123456"
        platform="whatsapp"
      />
    );
    expect(screen.getByText("WhatsApp")).toBeInTheDocument();
    expect(screen.getByTestId("social-icon-whatsapp")).toBeInTheDocument();
  });
});
