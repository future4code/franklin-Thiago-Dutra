import { Client } from "./Client";
import { Commerce } from "./Comerce";
import { Costumer } from "./Costumer";
import { Industry } from "./Industry";
import { Residence } from "./Residence";
import { User } from "./User";

// const diogo = new User("01", "diogo.dutra@email.com", "Diogo kamikaze", "nomedodog1234")
// console.log(diogo);

// const elliot = new Costumer(
//   "003",
//   "eliot@gmail.com.br",
//   "Eliot Keyformat",
//   "123455",
//   "103109877777"
// );

// console.log(elliot.introduceYourself());

// const client: Client = {
//     name: "Goli",
//     registrationNumber: 1,
//     consumedEnergy: 100,
    
//     calculateBill: () => {
//         return 2;
//     }
// }
// console.log(client);


const industry = new Industry( 3, "00000000")
const residence = new Residence( 2, "11111111")
const commerce = new Commerce( 3, "22222222")