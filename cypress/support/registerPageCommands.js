/// <reference types="cypress" />

Cypress.Commands.add("registerUser", () => {
  cy.get("#btnRegister").click();
});

Cypress.Commands.add("fillName", (name) => {
  cy.get("#user").type(name);
});

Cypress.Commands.add("fillEmail", (email) => {
  cy.get("#email").type(email);
});

Cypress.Commands.add("fillPassword", (password) => {
  cy.get("#password").type(password);
});

Cypress.Commands.add("checkMessage", (message) => {
  cy.get(".account_form").contains(message);
});

Cypress.Commands.add("checkRegisterSuccess", (userName) => {
  cy.get("#swal2-title").should("be.visible").contains("Cadastro realizado");

  cy.get(".swal2-html-container").should("have.text", `Bem-vindo ${userName}`);
});
