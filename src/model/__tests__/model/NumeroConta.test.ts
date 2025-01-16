import { NumeroConta } from "../../NumeroConta";

describe("NumeroConta", () => {
    test("conta com seis digitos", () => {
        const numeroConta: NumeroConta = new NumeroConta("123456");
        expect(numeroConta.numero).toBe("123456");
        expect(numeroConta.numero.length).toBe(6);
    });

    test("conta com sete digitos", async() => {
        expect(() => { new NumeroConta("1234567");}).toThrow("Número de conta invalida");
    });

    test("conta com cinco digitos", async () => {
        expect(() => { new NumeroConta("23456");}).toThrow("Número de conta invalida");
    });

    test("conta com o valor que nao sejam digitos", async () => {
        expect(() => { new NumeroConta("abc123"); }).toThrow("numero de conta invalida");
    });
});