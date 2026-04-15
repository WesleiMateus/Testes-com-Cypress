/// <reference types="cypress" />

describe("Bloqueio por tentativas inválidas", () => {
  beforeEach(() => {
    cy.visit("repenselog.com.br/auth");
  });

  it("Deve bloquear após N tentativas inválidas consecutivas", () => {
    // Arrange
    const tentativasPermitidas = 5; // substitua pelo valor real do sistema

    // Act - realiza N tentativas inválidas
    for (let i = 0; i < tentativasPermitidas; i++) {
      cy.get('[name="email"]').clear().type("teste@gmail.com");
      cy.get('[name="password"]').clear().type("senhaErrada");
      cy.get("#kt_sign_in_submit").click();
    }

    // Assert
    cy.get(
      "#kt_login_signin_form > div.mb-lg-15.alert.alert-danger > div",
    ).contains("Erro ao realizar login, tente novamente");
  });

  it("Deve liberar o acesso após o tempo de bloqueio expirar", () => {
    // Arrange - bloqueia a conta primeiro
    const tentativasPermitidas = 5;
    for (let i = 0; i < tentativasPermitidas; i++) {
      cy.get('[data-testid="email"]').clear().type("teste@gmail.com");
      cy.get('[data-testid="senha"]').clear().type("senhaErrada");
      cy.get('[data-testid="btn-login"]').click();
    }

    // Act - simula a passagem do tempo (sem esperar de verdade)
    cy.clock();
    cy.tick(30 * 60 * 1000); // avança 30 minutos em ms

    cy.get('[data-testid="email"]').clear().type("teste@gmail.com");
    cy.get('[data-testid="senha"]').clear().type("senhaCorreta");
    cy.get('[data-testid="btn-login"]').click();

    // Assert
    cy.url().should("include", "/dashboard");
  });

  it("Deve resetar o contador ao realizar login com sucesso", () => {
    // Arrange - faz N-1 tentativas inválidas
    const tentativasPermitidas = 5;
    for (let i = 0; i < tentativasPermitidas - 1; i++) {
      cy.get('[data-testid="email"]').clear().type("teste@gmail.com");
      cy.get('[data-testid="senha"]').clear().type("senhaErrada");
      cy.get('[data-testid="btn-login"]').click();
    }

    // Act - login correto reseta o contador
    cy.get('[data-testid="email"]').clear().type("teste@gmail.com");
    cy.get('[data-testid="senha"]').clear().type("senhaCorreta");
    cy.get('[data-testid="btn-login"]').click();

    // faz N tentativas inválidas novamente do zero
    for (let i = 0; i < tentativasPermitidas - 1; i++) {
      cy.get('[data-testid="email"]').clear().type("teste@gmail.com");
      cy.get('[data-testid="senha"]').clear().type("senhaErrada");
      cy.get('[data-testid="btn-login"]').click();
    }

    // Assert - não deve estar bloqueado pois o contador resetou
    cy.get('[data-testid="mensagem-erro"]').should(
      "not.contain",
      "Acesso bloqueado temporariamente",
    );
  });
});
