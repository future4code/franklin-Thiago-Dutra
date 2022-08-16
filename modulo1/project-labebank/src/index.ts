import express from "express";
import cors from "cors";
import { request } from "http";

const app = express();
app.use(cors());

app.use(express.json());

type Count = {
  name: string;
  cpf: string;
  birth: Date;
  balance: number;
  extract: ExtractList[];
};
type ExtractList = {
  value: number;
  date: Date;
  description: string;
};

const accounts: Count[] = [
  {
    name: "Thiago",
    cpf: "10310981948",
    birth: new Date(1996, 10, 1),
    balance: 0,
    extract: [
      {
        value: 0,
        date: new Date(2022, 8, 13),
        description: "Saque conta corrente",
      },
    ],
  },
  {
    name: "Talita",
    cpf: "10310981949",
    birth: new Date(1996, 10, 1),
    balance: 0,
    extract: [
      {
        value: 0,
        date: new Date(2022, 8, 13),
        description: "Saque conta corrente",
      },
    ],
  },
];
//Recuperar Usuários cadastrados
app.get("/users", (req, res) => {
  res.send(accounts);
});

// Cadastro de conta
app.post("/create-account", (req, res) => {
  const body: Count = req.body;
  const birth = new Date(body.birth);

  const newUser: Count = {
    name: body.name,
    cpf: body.cpf,
    birth: birth,
    balance: 0,
    extract: [],
  };

  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();

  const [checkCpf] = accounts.filter((account) => {
    return account.cpf === newUser.cpf;
  });

  if (age < 18) {
    res
      .status(406)
      .send("É necessário ser maior que 18 para realizar a abertuda da conta!");
  } else if (!checkCpf) {
    accounts.push(newUser);
    res.status(201).send("conta aberta com sucesso");
  } else {
    res.status(406).send("CPF JÁ CADASTRADO!!");
  }
});

// Para mostrar saldo
app.get("/account-saldo/:cpf", (req, res) => {
  const cpf = req.params.cpf;

  const [MostSald] = accounts.filter((account: any) => {
    return account.cpf === cpf;
  });
  const sald = `R$ ${MostSald.balance}`;
  res.send(sald);
});

app.get("/deposit/:cpf", (req, res) => {
  const cpf = req.params.cpf;
  const body: Count = req.body;

  const [MostSald] = accounts.filter((account: any) => {
    return account.cpf === cpf;
  });
  if (MostSald.name === body.name) {
    MostSald.balance = MostSald.balance + body.balance;
    const balance = `R$ ${MostSald.balance}`;
    res.send(balance);
  } else {
    res.send("Nome Incorreto");
  }
});

//Pagar conta
app.get("/pay/:cpf", (req, res) => {
  const cpf = req.params.cpf;
  const body: ExtractList = req.body;
  const verificateUndefinedDate = () => {
    if (body.date === undefined) {
      const today = new Date();
      body.date = new Date(2022, 8, 13);
    }
  };
  verificateUndefinedDate();

  
  const verificaDate = () => {
    const dataToday = new Date(2022, 8, 13);
    const bodyDate = new Date(body.date);

    if (bodyDate >= dataToday) {
      return true;
    }
  };

  const [selectedUser] = accounts.filter((account) => {
    return account.cpf === cpf;
  });

  if (verificaDate()) {
    if (selectedUser.balance >= body.value) {
      selectedUser.extract.push({
        value: body.value,
        date: new Date(body.date),
        description: body.description,
      });
      selectedUser.balance = selectedUser.balance - body.value;
      res.send("Conta Paga com sucesso");
    } else {
      res.send("Limite de dinheiro abaixo da conta ");
    }
  } else {
    res.send("Data informada vencida!!");
  }
});
app.put("/transaction-bank/:cpfremetente/:cpfdestinatario", (req, res)=>{
    const cpfremetente = (req.params.cpfremetente)
    const cpfdestinatario = (req.params.cpfdestinatario)
    const body:ExtractList = req.body

    const [selectedDestinatario] = accounts.filter((destinatario)=>{
        return destinatario.cpf === cpfdestinatario
    })
    const [selectedRemetente] = accounts.filter((remetente)=>{
        return remetente.cpf === cpfremetente
    })
        if (selectedRemetente.balance >= body.value) {
            selectedRemetente.extract.push({
            value: body.value,
            date: new Date(body.date),
            description: body.description,
          });
          selectedRemetente.balance = selectedRemetente.balance - body.value;
          selectedDestinatario.balance = selectedDestinatario.balance + body.value

          res.send(`O REMETENTE ${selectedRemetente.cpf} pagou a quantia de ${body.value} ao cliente ${selectedDestinatario.cpf}.`);
        } else {
          res.send("Limite de dinheiro abaixo da conta ");
        }

})




app.listen(3003, () => {
  console.log("Server is running in localhost:3003");
});
