import React from "react";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";
import { Section } from "./Section";

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

  it("renders card with sections", () => {
    render(
      <Card>
        <Section title="Title">Section</Section>
      </Card>
    );

    const text = screen.getByText(/Section/i);
    expect(text).toBeInTheDocument();

    const text2 = screen.getByText(/Title/i);
    expect(text2).toBeInTheDocument();
  });
});

describe("Section.tsx", () => {
  it("renders card with children", () => {
    render(<Section title="Title">Hello</Section>);

    const text = screen.getByText(/Hello/i);
    expect(text).toBeInTheDocument();

    const text2 = screen.getByText(/Title/i);
    expect(text2).toBeInTheDocument();
  });
});
