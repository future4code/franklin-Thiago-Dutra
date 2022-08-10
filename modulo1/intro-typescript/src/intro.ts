function checaTriangulo(a: number, b: number, c: number) {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }
  console.log(checaTriangulo(5, 5, 5));
  
  function imprimeTresCoresFavoritas() {
    const cor1: string = "marrom";
    const cor2: string = "preto";
    const cor3: string = "azul";
    console.log([cor1, cor2, cor3]);
  }
  
  imprimeTresCoresFavoritas();
  
  function checaAnoBissexto(ano: number): boolean {
    const cond1 = ano % 400 === 0;
    const cond2 = ano % 4 === 0 && ano % 100 !== 0;
    return cond1 || cond2;
  }
  
  console.log(checaAnoBissexto(2006));
  
  function comparaDoisNumeros(num1: number, num2: number) {
    let maiorNumero;
    let menorNumero;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca = maiorNumero - menorNumero;
  
    return diferenca;
  }
  
  console.log(comparaDoisNumeros(100, 105));
  
  function checaRenovacaoRG(anoNascimento: number, anoEmissao: number) {
    const anoAtual = 2022;
  
    const idade = anoAtual - anoNascimento;
    const tempoCarteira = anoAtual - anoEmissao;
  
    const cond1 = idade <= 20 && tempoCarteira >= 5;
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10;
    const cond3 = idade > 50 && tempoCarteira >= 15;
  
    return cond1 || cond2 || cond3;
  }
  
  console.log(checaRenovacaoRG(1996, 2005));