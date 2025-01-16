import { Conta } from "../../../src/model/Conta";
import { Recibo } from "../../../src/model/Recibo"
import { TransferenciaValor } from "./service/TransferenciaValor";

describe("Transferencia Valor", () => {
    test("transferencia de valor entre contas com sucesso", async () => {
        const contaOrigim: Conta = new Conta("123456", 1000.0);
        const contaDestino: Conta = new Conta("123456", 1000.0);

        const transferenciaValor: TransferenciaValor = new TransferenciaValor();
        const recibo: Recibo = transferenciaValor.transferir(contaOrigim, contaDestino, 100.0);

        expect(contaOrigim.saldo).toBe(900.0);
        expect(contaDestino.saldo).toBe(1100.0);
        expect(recibo.codigo.length).toBe(7);
    })
})