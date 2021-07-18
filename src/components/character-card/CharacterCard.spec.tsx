import React from "react";
import { render, screen } from "@testing-library/react";
import { CharacterCard } from "./CharacterCard";
import { placeholderCharacter } from "../../constants";
import { Card } from "components/card/Card";

describe("CharacterCard.tsx", () => {
  it("render data", () => {
    const character = {
      ...placeholderCharacter,
      name: "Test Character",
      type: "Type",
      species: "Human",
    };
    render(<CharacterCard data={character} />);

    expect(screen.getByText(/Test Character/i)).toBeInTheDocument();
    expect(screen.getByText(/Gender/i)).toBeInTheDocument();
    expect(screen.getByText(/Human/i)).toBeInTheDocument();
  });

  it("renders card with extra sections", () => {
    const character = {
      ...placeholderCharacter,
      name: "Test Character",
    };

    render(
      <CharacterCard data={character}>
        <Card.Section title="Title">hello</Card.Section>
      </CharacterCard>
    );

    expect(screen.getByText(/Title/i)).toBeInTheDocument();
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
});
