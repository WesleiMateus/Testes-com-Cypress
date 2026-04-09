describe("Cadastro", () => {
  it("Deve realizar o cadastro do usuário", () => {
    cy.visit("/register");
    cy.get("#user").type("Teste da Silva");
    cy.get("#email").type("testeUsuario@gmail.com");
    cy.get("#password").type("123123");
    cy.get("#btnRegister").click();
    cy.get(".swal2-popup").contains("Cadastro realizado");
  });

  it("Deve exibir erro ao clicar no botão cadastrar sem preencher o nome de usuário", () => {
    cy.visit("/register");
    cy.get("#email").type("testeUsuario@gmail.com");
    cy.get("#password").type("123123");
    cy.get("#btnRegister").click();
    // Validação do erro
    cy.get(".account_form").contains("O campo nome deve ser prenchido");
  });

  it("Deve apresentar erro ao clicar no botão de cadastrar sem preencher o email", () => {
    cy.visit("/register");
    cy.get("#user").type("Teste da Silva");
    cy.get("#password").type("123123");
    cy.get("#btnRegister").click();
    // Validação do erro
    cy.get(".account_form").contains(
      "O campo e-mail deve ser prenchido corretamente",
    );
  });

  it("Deve apresentar erro ao clicar no botão de cadastrar sem preencher a senha", () => {
    cy.visit("/register");
    cy.get("#user").type("Teste da Silva");
    cy.get("#email").type("testeUsuario@gmail.com");
    cy.get("#btnRegister").click();
    // Validação do erro
    cy.get(".account_form").contains(
      "O campo senha deve ter pelo menos 6 dígitos",
    );
  });

  it("Deve apresentar erro ao clicar no botão de cadastrar sem preencher os dados", () => {
    cy.visit("/register");
    cy.get("#btnRegister").click();
    // Validação do erro
    cy.get(".account_form").contains("O campo nome deve ser prenchido");
  });
});
