import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card.tsx", () => {
  it("renders card with children", () => {
    render(<Card>Hello</Card>);

    const text = screen.getByText(/Hello/i);
    expect(text).toBeInTheDocument();
  });

  it("renders card with children and left data", () => {
    render(<Card left={<div>World</div>}>Hello</Card>);

    const text = screen.getByText(/Hello/i);
    expect(text).toBeInTheDocument();

    const text2 = screen.getByText(/World/i);
    expect(text2).toBeInTheDocument();
  });
});
