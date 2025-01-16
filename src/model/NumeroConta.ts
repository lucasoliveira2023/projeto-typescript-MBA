import { NegocioErro } from '../Error/NegocioError';;

export class NumeroConta {
    private _numero: string;

    public constructor(numero: string) {
        this.validar(numero);
        this._numero = numero;
    }

    private validar(numero: string): void {
        if(!this.temSeisDigitos(numero)) {
            throw new NegocioErro("numero de conta invalida");
        }
    }

    private temSeisDigitos(numero: string): boolean {
        const regExp: RegExp = /^\d{6}$/;
        return regExp.test(numero);
    }

    public get numero(): string {
        return this._numero;
    }
}