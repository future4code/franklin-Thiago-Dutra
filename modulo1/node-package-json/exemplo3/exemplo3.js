import {tasks} from '../tasks.js'

const newTask = process.argv[2]

const taskList = [...tasks, newTask]

console.table(taskList)