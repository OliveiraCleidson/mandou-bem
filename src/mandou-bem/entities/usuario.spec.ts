import { Usuario } from './usuario';
describe("Usuario Unit Test", () => {
  it("Criar um usuario", () => {
    // System Under Test
    const sut = new Usuario({
      nome: "Fulano",
      email: "fulano@mail.com"
    });

    expect(sut.nome).toBe("Fulano");
    expect(sut.id).toBeDefined();
  })

  it("Não deve criar um usuário com email inválido", () => {
    // Throw Exception
    // Notification Pattern

    // Fast Validation 
    // Nome Email 
    // Dominio Rico

  })
})