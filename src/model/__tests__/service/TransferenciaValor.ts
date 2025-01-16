import { Conta } from "../../../../src/model/Conta";
import { Recibo } from "../../../../src/model/Recibo";

export class TransferenciaValor {
    public transferir(contaOrigem: Conta, contaDestino: Conta, valor:number): Recibo {
        contaOrigem.sacar(valor);
        contaDestino.depositar(valor);
        return new Recibo();
    }
}