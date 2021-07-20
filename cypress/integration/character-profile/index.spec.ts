/// <reference types="cypress" />

describe("Character Profile", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/RickAndMorty/characters/2");
  });

  it("opens /characters/:id", () => {
    cy.url().should("eq", "http://localhost:3000/RickAndMorty/characters/2");
  });

  it("goes to previous page", () => {
    cy.contains('Back').click()
    cy.url().should("eq", "http://localhost:3000/RickAndMorty/characters");
  });

  it("goes to next character", () => {
    cy.contains('Next Character').click()
    cy.url().should("eq", "http://localhost:3000/RickAndMorty/characters/3");
  });

  it("goes to previous page", () => {
    cy.contains('Previous Character').click()
    cy.url().should("eq", "http://localhost:3000/RickAndMorty/characters/1");
  });
});
