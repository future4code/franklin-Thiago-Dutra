import app from "./app";
import connection from "./connection";
import { Request, Response } from "express";


app.get("/actor", async (req:Request, res:Response) => {
    try{
       const result =  await connection("Actor")
        res.send(result)

    }catch(error){
        console.log(error)
        res.send(error)
    }
})

    app.get("/actor/name", async (req:Request, res:Response) => {
        const {name}  = req.body
        try{
           const result =  await connection.raw(`
           SELECT * FROM Actor WHERE name = "${name}"
         `)
         const count = result[0][0];
            res.send(count)
    
        }catch(error){
            console.log(error)
            res.send(error)
        }
})

app.get("/actor/gender", async (req:Request, res:Response) => {
    const {gender}  = req.body
    try{
       const result =  await connection.raw(`
       SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
     `)
        const count = result[0][0]
        res.send(count)
    }catch(error){
        console.log(error)
        res.send(error)
    }
})

app.put("/actor/edit/:id", async (req:Request, res:Response) => {
    try{
        await connection("Actor").update({
            salary:req.body.salary,
        }).where({
            id: req.params.id
        })
        res.send("Dados atualizados com sucesso!")

    }catch(error){
        console.log(error)
        res.status(500).send("An unexpected error ocurred.")
    }
})

app.delete("/actor/delete/:id", async (req:Request, res:Response) => {
    try{
        await connection("Actor").delete().where({
            id: req.params.id
        })
        res.send("Dados deletados com sucesso!")

    }catch(error){
        console.log(error)
        res.status(500).send("An unexpected error ocurred.")
    }
})

app.get("/actor/salarymedium/gender", async (req:Request, res:Response) => {
    const {gender}  = req.body
    try{
       const result =  await connection.raw(`
       SELECT AVG(salary) as media FROM Actor WHERE gender = "${gender}"
     `)
     const media = result[0][0]
        res.send(media)
    }catch(error){
        console.log(error)
        res.send(error)
    }
})
const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result[0][0]
  }
app.get("/actor/consult/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const actor = await getActorById(id);
  
      res.status(200).send(actor)
    } catch (err) {
      res.status(400).send({
        message: err,
      });
    }
  });
  const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
    `)
  
      return result[0][0]
  }
  app.get("/actor/gender", async (req: Request, res: Response) => {
    try {
      const count = await countActors(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch (err) {
      res.status(400).send({
        message: err
      });
    }
  });

  const createActor = async (
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
  )=> {
    await connection
      .insert({
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
      })
      .into("Actor");
  };
  
  app.post("/actor", async (req: Request, res: Response) => {
    try {
      await createActor(
        req.body.name,
        req.body.salary,
        new Date(req.body.dateOfBirth),
        req.body.gender
      );
  
      res.status(200).send();
    } catch (err) {
      res.status(400).send({
        message: err
      });
    }
  });