import { ordenaArray } from "./ex4";

describe("ordena uma lista de numeros do menor para o maior", () => {
    test("retorna o vetor", ()=> {
        const resultado = ordenaArray([3,2,1])
        
        expect(resultado).toEqual([1,2,3])
    })
    test("retorna o vetor [1, 3, 4, 7] para a entrada [4, 3, 2, 1]", () => {
        const resultado = ordenaArrays([4, 7, 1, 3])

        expect(resultado).toEqual([1, 3, 4, 7]);
    })
    test("retorna o vetor [1, 3, 4, 7] para a entrada [4, 3, 2, 1]", () => {
        const resultado = ordenaArrays([4, 7, 1, 3])

        expect(resultado).toEqual([1, 3, 4, 7]);
    })
});