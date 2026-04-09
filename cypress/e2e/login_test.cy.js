/// <reference types="cypress" />

describe("Login", () => {
  it("Deve logar o usário sem erros", () => {
    cy.visit("/login");
    cy.get("#user").type("teste@gmail.com");
    cy.get("#password").type("123123");
    cy.get("#btnLogin").click();
    cy.get("#swal2-title");
    cy.contains("Login realizado");
  });

  it("Deve mostrar o erro ao clicar no botão de login sem preencher o email", () => {
    cy.visit("/login");
    cy.get("#password").type("123123");
    cy.get("#btnLogin").click();
    cy.get(".account_form")
      .then((element) => {
        element.text();
      })
      .contains("E-mail inválido"); // Metodo then só usado para fins de testes e fixação
  });

  it("Deve mostrar o erro ao clicar no botão de login sem preencher a senha", () => {
    cy.visit("/login");
    cy.get("#user").type("teste@gmail.com");
    cy.get("#btnLogin").click();
    cy.get(".account_form").contains("Senha inválida");
  });

  it("Deve mostrar o erro ao clicar no botão de login sem preencher os dados", () => {
    cy.visit("/login");
    cy.get("#btnLogin").click();
    cy.get(".account_form").contains("E-mail inválido");
  });
});
