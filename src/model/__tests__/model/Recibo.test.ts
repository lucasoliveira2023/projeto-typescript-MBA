import { Recibo } from "../../../model/Recibo";

describe("Recibo", ( )=> {
    test("criar recibo com sucesso", () => {
        const recibo: Recibo = new Recibo();
        expect(recibo.codigo.length).toBe(8);
    });
});