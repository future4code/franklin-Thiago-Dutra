import Character, { performAttack, validateCharacter } from "../src/calculateEmployeeSalary"

test("return empty name", () => {
    const result = validateCharacter({
        nome:"",
        vida: 1500,
        defesa: 2000,
        forca:500
    })
    expect(result).toBe(false)
})

test("return false if person life ==0",() => {
    const result = validateCharacter({
        nome:"Plankton",
        vida: 0,
        defesa: 2000,
        forca:500
    })
    expect(result).toBe(false)
})

test("reurn false person force ==0", () => {
    const result = validateCharacter({
        nome:"Plankton",
        vida: 420,
        defesa: 2000,
        forca:0
    })
    expect(result).toBe(false)
})

test("reurn false person defense ==0", () => {
    const result = validateCharacter({
        nome:"Plankton",
        vida: 420,
        defesa: 0,
        forca:100
    })
    expect(result).toBe(false)
})


test("reurn false person defese -0", () => {
    const result = validateCharacter({
        nome:"Plankton",
        vida: 420,
        defesa: -2000,
        forca:110
    })
    expect(result).toBe(false)
})

test("reurn true person", () => {
    const result = validateCharacter({
        nome:"Plankton",
        vida: 10000,
        defesa: 5000,
        forca:1000
    })
    expect(result).toBe(true)
})

test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
        return true
    })
    const attacker:Character = {
        nome:"Plankton",
        vida:1500,
        defesa:200,
        forca:600,
    }
    const defender:Character = {
        nome:"Katarina",
        vida:1500,
        defesa:400,
        forca:800,
    }
    performAttack(attacker,defender,validatorMock as any);
    expect(defender.vida).toEqual(1300)
    expect(validatorMock).toHaveBeenCalled()
    expect(validatorMock).toHaveBeenCalledTimes(2)
    expect(validatorMock).toHaveReturnedTimes(2)
    })
    test("Should return invalid character error", () => {
        expect.assertions(4);
         const validatorMock = jest.fn(() => {
          return false;
        });
    
        const attacker: Character = {
          nome: "",
          vida: 1500,
          defesa: 200,
          forca: 600,
        };
    
        const defender: Character = {
          nome: "Kitana",
          vida: 1500,
          defesa: 400,
          forca: 800,
        };
    
        try {
          performAttack(attacker, defender, validatorMock as any);
        } catch (err) {
          expect(err).toBe("Invalid character");
          expect(validatorMock).toHaveBeenCalled();
          expect(validatorMock).toHaveBeenCalledTimes(1);
          expect(validatorMock).toHaveReturnedTimes(1);
        }
      });