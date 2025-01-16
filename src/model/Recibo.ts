export class Recibo {
    private _codigo: string;
    

    public constructor() {
        this._codigo = this.gerarCodigo();

    }

    public get codigo(): string {
        return this._codigo;
    }

    private gerarCodigo(): string {
        return Math.floor(Math.random() * 89999999+10000000).toString();
    }
}