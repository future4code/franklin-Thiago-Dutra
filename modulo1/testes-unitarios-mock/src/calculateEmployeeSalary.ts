
export default interface Character {
  nome: string;
  vida: number;
  defesa: number;
  forca: number;
}

export const validateCharacter = (
  input: Character
) => {
  if(!input.nome || !input.vida || !input.defesa || !input.forca){
    return false
  }
  if( input.vida <=0 || input.defesa <=0 || input.forca <=0){
    return false
  }
  return true
};

export const perfomAttack = (attacker:Character, defender:Character)=>{
  if(!validateCharacter(attacker) || !validateCharacter(defender)){
    throw new Error("Invalid character")
  }
  if(attacker.forca > defender.defesa){
    defender.vida -= attacker.forca - defender.defesa
  }
}
export const performAttack = (
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.forca > defender.defesa) {
    defender.vida -= attacker.forca - defender.defesa;
  }
};