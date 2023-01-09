import { Task } from "../types";

export const tasks: Array<Task> = [
    {
        id: 1,
        task: "Aprender el texto",
        priority: 1,
        completed: false,
        scheduleAt: new Date('2023/01/08')
    },
    {
        id: 2,
        task: "Terminar el fronted",
        priority: 1,
        completed: false,
        scheduleAt: new Date('2023/01/09')
    },
    {
        id: 3,
        task: "Crear nuevos endpoint",
        priority: 2,
        completed: false,
        scheduleAt: new Date('2023/01/09')
    },
    {
        id: 4,
        task: "Terminar maquetación",
        priority: 2,
        completed: true,
        scheduleAt: new Date('2023/01/08')
    },
    {
        id: 5,
        task: "Unir front y back",
        priority: 1,
        completed: false,
        scheduleAt: new Date('2023/01/09')
    },
    {
        id: 6,
        task: "Organizar habitación",
        priority: 4,
        completed: false,
        scheduleAt: new Date('2023/01/09')
    },
    {
        id: 7,
        task: "Comenzar proyecto",
        priority: 1,
        completed: true,
        scheduleAt: new Date('2023/01/07')
    }
]