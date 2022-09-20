import { User } from "./models/User";

export function performPurchase(user: User, value: number): User | undefined {
    
    const moneyIsEnough: boolean = user.balance >= value

    if (moneyIsEnough) {
        return {
            ...user,
            balance: user.balance - value
        }
    }
    return undefined
}