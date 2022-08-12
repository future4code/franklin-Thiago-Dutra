import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

interface dataList {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const data: dataList[] = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: true,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
];

app.get("/ping", (req, res) => {
  res.send("pong!!");
});

app.get("/ping/conclued", (req, res) => {
  const justConclued = data.filter((data: any) => {
    return data.completed === true;
  });
  res.send(justConclued);
});

app.post("/ping/newtask", (req, res) => {
  const newTask: dataList = req.body;
  const newTaskList: {}[] = [...data, newTask];
  res.send(newTaskList);
});

app.put('/ping/:userId/:id', (req,res)=>{
    const userId:number = Number(req.params.userId)
    const id : number = Number(req.params.id);

    const dataUser: dataList[] = data.filter(user => user.userId === userId)

    dataUser.map(data => {
        if(data.id === id){
            data.completed 
        }
    });
})

app.listen(3003, () => console.log("Servidorem 3003"));
