import { Conta } from "../../../Conta";
import { Recibo } from "../../../Recibo";
import { TransferenciaValor } from "./TransferenciaValor";

describe("TransferenciaValor", () => {
    test("transferencia de valor entre contas com sucesso", async () => {
        const contaOrigem: Conta = new Conta("123456", 1000);
        const contaDestino: Conta = new Conta("654321", 1000);

        const transferenciaValor: TransferenciaValor = new TransferenciaValor();
        const recibo: Recibo = transferenciaValor.transferir(contaOrigem, contaDestino, 100);
        transferenciaValor.transferir(contaOrigem, contaDestino, 100);

        expect(contaOrigem.saldo).toBe(800);
        expect(contaDestino.saldo).toBe(1200);
        expect(recibo.codigo.length).toBe(8);
    });
});