class UserAccount {
    private cpf: String;
    private name: String;
    private age: Number;
    private balance: Number = 0;
    private transactions: Array<Transaction> = [];

    constructor(
        cpf: String,
        name: String,
        age: Number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    getUserAccount() {
        return {
            name: this.name,
            cpf: this.cpf,
            age: this.age,
            balance: this.balance,
            transactions: this.transactions
        }
    }

    setUserTransaction(newTransaction: Transaction) {
        this.transactions.push(newTransaction)
    }

}

const minatoAccount = new UserAccount("89547896584", "Minato Namikazi", 24)

/*
A mensagem "Chamando o construtor da classe User" foi impressa uma única vez
*/

// c)

/*
É possível acessar às propriedades privadas de uma classe através de métodos getters e setters criados no interior da própria classe
*/

// --------------- Exercício 2 ---------------

class Transaction {

    private description: String
    private value: Number
    private date: String

    constructor(
        description: String,
        value: Number,
        date: String
    ) {
        this.description = description
        this.value = value
        this.date = date
    }

    getTransaction() {
        return { description: this.description, value: this.value, date: this.date }
    }

    setTransaction(
        newDescription: String,
        newValue: Number,
        newDate: String
    ) {
        this.description = newDescription
        this.value = newValue
        this.date = newDate
    }
}

const minatoTransaction = new Transaction("", 0, "")

minatoTransaction.setTransaction("Compra de Hiraishin Kunai", 300, "1990-10-10")

minatoAccount.setUserTransaction(minatoTransaction)

console.log(minatoAccount.getUserAccount());

// --------------- Exercício 3 ---------------

class Bank {
    private accounts: Array<UserAccount>

    constructor(accounts: Array<UserAccount>) {
        this.accounts = accounts;
    }
}