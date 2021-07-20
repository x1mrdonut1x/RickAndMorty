/// <reference types="cypress" />

describe("Character List", () => {
  it("redirects to /characters", () => {
    cy.visit("http://localhost:3000");
    cy.url().should("eq", "http://localhost:3000/RickAndMorty/characters");
  });

  it("redirects to /characters/:id after clicking on article", () => {
    cy.intercept("GET", "https://rickandmortyapi.com/api/character").as(
      "getCharacters"
    );

    cy.visit("http://localhost:3000");
    cy.wait("@getCharacters");

    cy.get("article").first().click();
    cy.url().should("eq", "http://localhost:3000/RickAndMorty/characters/1");
  });
});
