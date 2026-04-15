/// <reference types="cypress" />

describe("Autenticação", () => {
  context("Authentication / Correct data", () => {
    it("Ao clicar no botão de login com e-mail e senha cadastrados, deve realizar o login com sucesso", () => {
      cy.visit("/login");
      cy.get("#user").type("teste@gmail.com");
      cy.get("#password").type("123123");
      cy.get("#btnLogin").click();
      cy.get("#swal2-title");
      cy.contains("Login realizado");
    });
  });

  context("Authentication / E-mail testing", () => {
    it.only("Ao clicar no botão de login com um e-mail não cadastrado no sistema, deve mostrar erro ao usuário", () => {
      cy.visit("/login");
      cy.get("#user").type("    ");
      cy.get("#password").type("123123");
      cy.get("#btnLogin").click();
      cy.get(".account_form")
        .then((element) => {
          const text = element.text();
          text;
          expect(text).to.equal("E-mail inválido")
        })
    });

    it("Ao clicar no botão de login com o E-mail no formato incorreto, deve mostrar o erro ao usuário", () => {
      cy.visit("/login");
      cy.get("#user").type("123@gmail.com");
      cy.get("#password").type("123123");
      cy.get("#btnLogin").click();
      cy.get(".account_form").contains("E-mail inválido");
    });

    it.only("Ao clicar no botão de login sem preencher o e-mail com a senha preenchida, deve mostrar erro ao usuário", () => {
      cy.visit("/login");
      cy.get("#password").type("123123");
      cy.get("#btnLogin").click();
      cy.get(".account_form")
        .get(".invalid_input")
        .should("contain", "E-mail inválido");
    });

    it("Ao realizar N tentativas de login com credenciais inválidas consecutivamente, deve bloquear o acesso temporariamente", () => {
      cy.visit("/login");
      cy.get("#user").type("emailinvalido@gmail.com");
      cy.get("#password").type("##      ##");
      cy.get("#btnLogin").click();
      cy.get(".account_form")
        .contains("E-mail inválido")
        .contains("Senha inválida");
    });
  });
});
