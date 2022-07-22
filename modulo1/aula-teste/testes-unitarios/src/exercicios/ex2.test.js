import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para arara", () => {
    const ehPalindromo = checaPalindromo("arara");
    expect(ehPalindromo).toEqual(true);
  })

  it("retorna true para asa", () => {
    const ehPalindromo = checaPalindromo("asa");
    expect(ehPalindromo).toEqual(true);
  })

  // it("retorna true para socorram-me subu no onibus em marrocos", () => {
  //   const ehPalindromo = checaPalindromo("socorram-me subu no onibus em marrocos");
  //   expect(ehPalindromo).toEqual(true);
  // })
  it("retorna true ana", () => {
    const ehPalindromo = checaPalindromo("ana");
    expect(ehPalindromo).toEqual(true);
  })
});
