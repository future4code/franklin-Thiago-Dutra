import { Residence } from "./Residence"
import { Client } from "./Client"

class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string,
    ) {
        super(residentsQuantity, cep)
    }

    getCpf(): string {
        return this.cpf
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.75;
    }
}