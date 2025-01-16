import { NegocioError } from "../Error/NegocioError";

export class NumeroConta {
    private _numero: string;

    public constructor(numero: string) {
        if(numero.length < 6 || numero.length > 6)

            throw new NegocioError("Número da conta invalida");
        this._numero = numero;
    }

    public get numero(): string {
        return this._numero;
    }
}