/// <reference types="cypress" />

describe("Login", () => {
  it("Login com sucesso", () => {
    cy.visit("/login");
    cy.get("#user").type("teste@gmail.com");
    cy.get("#password").type("123123");
    cy.get("#btnLogin").click();
    cy.get("#swal2-title");
    cy.contains("Login realizado");
  });

  it("Login sem user", () => {
    cy.visit("/login");
    cy.get("#password").type("123123");
    cy.get("#btnLogin").click();
    cy.get(".account_form")
      .then((element) => {
        element.text();
      })
      .contains("E-mail inválido"); // Metodo then só usado para fins de testes e fixação
  });

  it("Login sem senha", () => {
    cy.visit("/login");
    cy.get("#user").type("teste@gmail.com");
    cy.get("#btnLogin").click();
    cy.get(".account_form").contains("Senha inválida");
  });

  it("Login sem credenciais", () => {
    cy.visit("/login");
    cy.get("#btnLogin").click();
    cy.get(".account_form").contains("E-mail inválido");
  });
});
