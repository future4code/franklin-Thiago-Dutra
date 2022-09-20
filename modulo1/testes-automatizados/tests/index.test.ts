import { performPurchase } from "../src"
import { User } from "../src/models/User"

describe(``, () => {
    test(`Testing if balance is geater than value`, () => {
        const user: User = {
            name: "Thiago",
            balance: 7000
        }

        const result = performPurchase(user, 350)

        expect(result).toEqual({
            name: "Pedro",
            balance: 6650
        })
    })

    test(`Testing if balance is equal than value`, () => {
        const user: User = {
            name: "Vitor",
            balance: 10000
        }

        const result = performPurchase(user, 10000)

        expect(result).toEqual({
            name: "Calra",
            balance: 0
        })
    })

    test(`Testing if balance is geater than value`, () => {
        const user: User = {
            name: "clEbso",
            balance: 0
        }

        const result = performPurchase(user, 1)

        expect(result).toBeUndefined
    })
})