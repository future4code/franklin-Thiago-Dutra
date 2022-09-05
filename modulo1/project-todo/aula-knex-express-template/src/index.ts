import app from "./app";
import connection from "./connection";
import { Request, Response } from "express";

app.post('/user', async(req,res)=> {
  const {name,nickname,email}= req.body
  const id:string = Date.now().toString()
  const user = {
    id,name,nickname,email
  }
  try {
    await connection('User')
    .insert(user)
    res.status(201).send('user criado com sucesso')
  } catch (error) {
      res.status(500).send('ocorreu um errop')
  }
})

app.get('/user', async(req, res) => {

  try {
      const user = await connection('User')
      .select('id', 'nickname')
      res.send(user)
      
  }catch(erro) {
      console.log(erro);
      res.status(500).send('Ocorreu um erro')
  }
})

app.get('/user/:id', async(req, res) => {
  const id = req.params.id

  try {
      const user = await connection('User')
      .select('id', 'nickname')
      .where({id: id})

      res.send(user[0])
      
  }catch(erro) {
      console.log(erro);
      res.status(500).send('Ocorreu um erro')
  }
})
app.put('/user/edit/:id', async(req, res) => {
  const id = req.params.id
  const {name, nickname} = req.body

  try {
      await connection('User')
      .update({
          name: name,
          nickname: nickname
      })
      .where({id: id})

      res.send('Usuário atualizado')
      
  }catch(erro) {
      console.log(erro);
      res.status(500).send('Ocorreu um erro')
  }
})

app.post('/task', async (req, res) => {
  const task = req.body
  task.limitDate = task.limitDate.split('/').reverse().join('-');
  try {
      await connection('Tasks')
          .insert(task)
          res.status(201).send('Tarefa criada com sucesso')

  } catch(erro){
      console.log(erro);
      res.status(500).send('Ocorreu um erro')
      
  }

})

app.get('/task', async(req, res) => {

  try {
      const user = await connection('Tasks')
      .select('id', 'title', 'description','limitDate', 'createUserId')
      res.send(user)
      
  }catch(erro) {
      console.log(erro);
      res.status(500).send('Ocorreu um erro')
  }
})

app.get('/task/:id',async (req, res) => {
  const id = req.params.id

  try {
      const task = await connection('Tasks').join('User', 'Tasks.createUserId', '=', 'User.id').select('Tasks.id', 'Tasks.title', 'Tasks.description', 'Tasks.limitDate', 'Tasks.createUserId', 'User.nickname').where('Tasks.id', id)

      res.status(200).send(task[0])
      
  } catch(erro){
      console.log(erro);
      res.status(500).send('Ocorreu um erro')
      
  }
})