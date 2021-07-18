import React from "react";
import { render, screen } from "@testing-library/react";
import { CharacterCard } from "./CharacterCard";
import { placeholderCharacter } from "../../constants";

describe("CharacterCard.tsx", () => {
  it("renders loading state", () => {
    render(<CharacterCard />);

    const text = document.getElementById("card-loader");
    expect(text).toBeInTheDocument();
  });

  it("render data", () => {
    const character = { ...placeholderCharacter, name: "Test Character" };
    render(<CharacterCard data={character} />);

    const text = document.getElementById("card-loader");
    expect(text).not.toBeInTheDocument();

    expect(screen.getByText(/Test Character/i)).toBeInTheDocument();
    expect(screen.getByText(/Gender/i)).toBeInTheDocument();
    expect(screen.getByText(/Species/i)).toBeInTheDocument();
  });
});
