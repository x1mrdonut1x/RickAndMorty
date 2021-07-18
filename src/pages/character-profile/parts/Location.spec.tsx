import { render, screen } from "@testing-library/react";
import { Location } from "./Location";

describe("Location.tsx", () => {
  it("render Location card with no data", () => {
    render(<Location title="Title" />);

    expect(screen.queryByText(/Title/i)).toBeInTheDocument();
    expect(screen.queryByText(/Unknown/i)).toBeInTheDocument();
  });

  it("render Location card with data", () => {
    const location = {
      id: 0,
      name: "Test Name",
      type: "Test Type",
      dimension: "Test Dimension",
      residents: ["1", "2"],
      url: "",
      created: "",
    };
    render(<Location title="Title" data={location} />);

    expect(screen.queryByText(/Test Name/i)).toBeInTheDocument();
    expect(screen.queryByText(/Test Type/i)).toBeInTheDocument();
    expect(screen.queryByText(/Test Dimension/i)).toBeInTheDocument();
    expect(screen.queryByText(/Residents/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Residents/i).closest("div")?.lastChild
    ).toHaveTextContent("2");
    expect(screen.queryByText(/Unknown/i)).not.toBeInTheDocument();
  });

  it("render Location card with loading state", () => {
    render(<Location title="Title" isLoading />);

    expect(document.getElementById("card-loader")).toBeInTheDocument();
  });
});
