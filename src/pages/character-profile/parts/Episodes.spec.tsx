import { render, screen } from "@testing-library/react";
import { Episodes } from "./Episodes";

describe("Episodes.tsx", () => {
  it("render Episodes card with data", () => {
    const episodes = {
      id: 0,
      name: "Test Name",
      air_date: "2020-01-01",
      episode: "S01E01",
      characters: ["1", "2"],
      url: "",
      created: "",
    };
    render(<Episodes data={episodes} />);

    expect(screen.queryByText(/Test Name/i)).toBeInTheDocument();
    expect(screen.queryByText(/2020-01-01/i)).toBeInTheDocument();
    expect(screen.queryByText(/S01E01/i)).toBeInTheDocument();
  });

  it("render Episodes card with loading state", () => {
    render(<Episodes isLoading />);

    expect(document.getElementById("card-loader")).toBeInTheDocument();
  });
});
