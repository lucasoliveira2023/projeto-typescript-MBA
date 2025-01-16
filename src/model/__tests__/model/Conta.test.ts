import { Conta } from "../../Conta";

describe("Conta", () => {
    test("sacar com sucesso", async () => {
        const conta: Conta = criarConta();
        conta.sacar(200);
        expect(conta.saldo).toBe(4800);
    });

    
    test("sacar com valor zerado", async() => {
        const conta: Conta = criarConta();
        expect(() => conta.sacar(0)).toThrow("Valor nao pode ser menor ou igual que zero");
    });

    test("sacar com valor negativo", async() => {
        const conta: Conta  = criarConta();
        expect(() => conta.sacar(-200)).toThrow("Valor inválido");
    })

    test("depositar com sucesso", async () => {
        const conta: Conta = criarConta();;
        conta.depositar(200);
        expect(conta.saldo).toBe(5200);
    });

    test("depositar com valor zerado", async() => {
        const conta: Conta = criarConta();
        expect(() => conta.depositar(0)).toThrow("Valor inválido");
    })

    test("sacar com valor negativo", async() => {
        const conta: Conta = criarConta();
        expect(() => conta.depositar(-200)).toThrow("Valor nao pode ser menor ou igual a zero");
    })

    test("sacar valor acima do saldo", async() => {
        const conta: Conta = criarConta();
        expect(() => conta.sacar(200)).toThrow("Saldo indisponivel para operacao");
    });

});

function criarConta() : Conta {
    return new Conta("123456", 5000);
};

function criarContaSaldo199() : Conta {
    return new Conta("123456", 199);
}