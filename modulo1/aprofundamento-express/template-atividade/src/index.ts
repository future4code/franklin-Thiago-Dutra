import express from "express";
<<<<<<< Updated upstream
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
=======
import cors from 'cors';



const app = express();
app.use(cors());
app.use(express.json());

type ToDo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }
const toDoList: ToDo[] = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 2,
      "id": 1,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 2,
      "id": 2,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 2,
      "id": 3,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 3,
      "id": 1,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 3,
      "id": 2,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 3,
      "id": 3,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 4,
      "id": 1,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    },
    {
      "userId": 4,
      "id": 2,
      "title": "vero rerum temporibus dolor",
      "completed": true
    },
    {
      "userId": 4,
      "id": 3,
      "title": "ipsa repellendus fugit nisi",
      "completed": true
    },
    {
      "userId": 4,
      "id": 4,
      "title": "et doloremque nulla",
      "completed": false
    },
    {
      "userId": 5,
      "id": 1,
      "title": "repellendus sunt dolores architecto voluptatum",
      "completed": true
    },
    {
      "userId": 5,
      "id": 2,
      "title": "ab voluptatum amet voluptas",
      "completed": true
    },
    {
      "userId": 5,
      "id": 3,
      "title": "accusamus eos facilis sint et aut voluptatem",
      "completed": true
    }    
]

//Exercício 1 
app.get(("/ping"), (req, res) => {
    res.send("pong!")
})

//ex 4
app.get('/todos', (req, res) => {
    res.status(200).send(toDoList)
})

app.get('/todos/:status', (req, res)=>{
    const status:string = req.params.status
    if(status === 'completed'){
      return res.send(toDoList.filter((todo:ToDo)=> todo.completed))
    }else{
      return res.send(toDoList.filter((todo:ToDo)=> !todo.completed))
    }
  
  })

  app.post('todos/createtodo', (req, res) => {
    const newToDo:ToDo = req.body

    const newToDoList: {}[] = [
        ...toDoList, newToDo]
        res.send(newToDoList)
  })
  app.put('/todos/:userId/:id', (req, res)=>{
    const userId: number = Number(req.params.userId)
    const id: number = Number(req.params.id)
  
    const toDoUserList: ToDo[] = toDoList.filter(user => user.userId === userId)
  
    toDoUserList.forEach(toDo=> {
      if(toDo.id === id){
        (toDo.completed? (toDo.completed = !toDo.completed) : (toDo.completed = !toDo.completed))
      }
    });
    res.send('Status modified')
  })
  
  app.delete('/todos/:userId/:id', (req, res) => {
    const userId: number = Number(req.params.userId)
    const id: number = Number(req.params.id)
  
    const toDoUserList: ToDo[] = toDoList.filter(user => user.userId === userId)
  
    const newUserToDoList = toDoUserList.filter(todo => todo.id !== id)
  
    res.send(newUserToDoList)
      
    } 
  )
  app.get('/user/:userId/todos', (req, res)=>{
    const userId: number = Number(req.params.userId)  
    const toDoUserList: ToDo[] = toDoList.filter(user => user.userId === userId)
  
    res.send(toDoUserList)
  
  })

app.listen(3003, function(){
    console.log("rodando na porta 3003");
    
})
>>>>>>> Stashed changes
