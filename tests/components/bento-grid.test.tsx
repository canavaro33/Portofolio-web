import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

describe("BentoGrid", () => {
  it("renders a grid container", () => {
    render(<BentoGrid data-testid="bento-grid">content</BentoGrid>);
    const grid = screen.getByTestId("bento-grid");
    expect(grid).toBeInTheDocument();
    expect(grid).toHaveClass("grid");
  });

  it("renders children inside the grid", () => {
    render(
      <BentoGrid>
        <div data-testid="child">Child content</div>
      </BentoGrid>
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("accepts additional className", () => {
    render(
      <BentoGrid data-testid="bento-grid" className="custom-class">
        content
      </BentoGrid>
    );
    const grid = screen.getByTestId("bento-grid");
    expect(grid).toHaveClass("custom-class");
  });
});

describe("BentoGridItem", () => {
  it("renders with dark variant by default", () => {
    render(<BentoGridItem data-testid="item">content</BentoGridItem>);
    const item = screen.getByTestId("item");
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass("bg-matte-black");
    expect(item).toHaveClass("text-off-white");
  });

  it("renders with light variant", () => {
    render(
      <BentoGridItem data-testid="item" variant="light">
        content
      </BentoGridItem>
    );
    const item = screen.getByTestId("item");
    expect(item).toHaveClass("bg-off-white");
    expect(item).toHaveClass("text-matte-black");
  });

  it("applies column span", () => {
    render(
      <BentoGridItem data-testid="item" colSpan={2}>
        content
      </BentoGridItem>
    );
    const item = screen.getByTestId("item");
    expect(item).toHaveClass("md:col-span-2");
  });

  it("applies row span", () => {
    render(
      <BentoGridItem data-testid="item" rowSpan={2}>
        content
      </BentoGridItem>
    );
    const item = screen.getByTestId("item");
    expect(item).toHaveClass("md:row-span-2");
  });

  it("renders children", () => {
    render(
      <BentoGridItem>
        <span data-testid="child">Hello</span>
      </BentoGridItem>
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });
});
