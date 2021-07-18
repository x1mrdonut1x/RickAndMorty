import { render, screen } from "@testing-library/react";
import { Navigation } from "./Navigation";
import { MemoryRouter, Route } from "react-router-dom";

describe("Navigation.tsx", () => {
  it("render all buttons", () => {
    render(
      <MemoryRouter initialEntries={["characters/2"]}>
        <Route path="characters/:characterId" component={Navigation} />
      </MemoryRouter>
    );

    expect(screen.queryByText(/Back/i)).toBeInTheDocument();
    expect(screen.queryByText(/Next Character/i)).toBeInTheDocument();
    expect(screen.queryByText(/Previous Character/i)).toBeInTheDocument();
  });
  it("doest NOT render previous character", () => {
    render(
      <MemoryRouter initialEntries={["characters/1"]}>
        <Route path="characters/:characterId" component={Navigation} />
      </MemoryRouter>
    );

    expect(screen.queryByText(/Back/i)).toBeInTheDocument();
    expect(screen.queryByText(/Next Character/i)).toBeInTheDocument();
    expect(screen.queryByText(/Previous Character/i)).not.toBeInTheDocument();
  });
});
