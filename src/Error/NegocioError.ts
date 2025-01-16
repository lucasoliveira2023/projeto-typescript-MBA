export class NegocioError extends Error {
    constructor(mensagem: string) {
        super(mensagem);
        
        Object.setPrototypeOf(this, NegocioError.prototype);
    }
}