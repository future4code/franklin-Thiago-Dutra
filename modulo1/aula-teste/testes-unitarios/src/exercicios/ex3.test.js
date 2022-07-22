import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    it("retorna true para esse array", () => {
        const arrayDuplicado = checaItensDuplicados([5,5,2,3]);
        expect(arrayDuplicado).toEqual(true)
    })

    it("retorna false para o array errado", () => {
        const arrayDuplicado = checaItensDuplicados(["a","b"]);
        expect(arrayDuplicado).toEqual(false)
    })

    it("retorna false para o array errado", () => {
        const arrayDuplicado = checaItensDuplicados([]);
        expect(arrayDuplicado).toEqual(false)
    })

    it("retorna false para o array errado", () => {
        const arrayDuplicado = checaItensDuplicados(["1","2","1"]);
        expect(arrayDuplicado).toEqual(true)
    })
});
