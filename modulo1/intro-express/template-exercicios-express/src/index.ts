import express, { response } from 'express'
import cors from 'cors'

const app = express()
//dados serão inforamdos para o servidor com json
app.use(express.json())

// essa api não tera o erro de cors
app.use(cors())

const users = [
    {
      id: 1,
      name: "Thiago",
      phone: 41998415276,
      email: "thiago@gmail.com",
      website: "thiagodutra.com",
    },
    {
      id: 2,
      name: "Talita",
      phone: 41998455444,
      email: "talita@gmail.com",
      website: "talita.com",
    },
    {
      id: 3,
      name: "guinazu",
      phone: 41898756468,
      email: "guinazu@gmail.com",
      website: "gunazu.com",
    },
  ];
  //creio que seja melhor separar os dados porisso criei por fora
  const posts = [
    {
      id: 1,
      title: "Post 1 do user 1",
      body: "Body do Post 1 do user 1",
      userId: 1,
    },
    {
      id: 2,
      title: "Post 2 do user 1",
      body: "Body do Post 2 do user 1",
      userId: 1,
    },
    {
      id: 3,
      title: "Post 1 do user 2",
      body: "Body do Post 1 do user 2",
      userId: 2,
    },
    {
      id: 4,
      title: "Post 2 do user 2",
      body: "Body do Post 2 do user 2",
      userId: 2,
    },
    {
      id: 5,
      title: "Post 1 do user 3",
      body: "Body do Post 1 do user 3",
      userId: 3,
    },
    {
      id: 6,
      title: "Post 2 do user 3",
      body: "Body do Post 2 do user 3",
      userId: 3,
    },
  ];
  app.get("/", (req,res) =>{
    res.send(users)
  })

  app.get("/posts", (req, res) => {
    res.send(posts);
  });

  app.get("/users/:userId", (req, res) => {
    const userId = req.params.userId;
    const foundId = posts.filter((post) => {
      return post.userId === Number(userId);
    });
    res.send(foundId);
  });

app.listen(3003, () => {
    console.log("server is runnig na porta 3003")
});