/** @format */

import React, { useEffect, useState } from "react";
import { Task } from "../../components";
import { tasks as data } from '../../data/tasks' 
import { Task as TaskType} from "../../types";

export interface HomeInterface {}

interface HomeState {
  tasks: Array<TaskType>
}

const Home: React.FC<HomeInterface> = () => {
  const [ tasks, setTasks ] = useState<HomeState['tasks']>([])
  const date = new Date();
  
  useEffect(() => {
    setTasks(data.filter(task => !task.completed))
  },[])

  return (
    <div className="w-full h-full">
      <header className="w-full">
        <h2 className="text-3xl font-bold">
          Good{" "}
          {date.getHours() < 12
            ? "Morning"
            : date.getHours() < 18
            ? "Afternoon"
            : "Evening"}
        </h2>
        <p className="text-xl font-light text-slate-500">
          It's{" "}
          {date.toLocaleString("en-US", {
            weekday: "long",
            month: "short",
            day: "2-digit",
          })}
        </p>
      </header>
      <div className="w-full mt-8">
        <ul>
          {
            tasks.map(task => (
              <Task key={task.id} content={task}/>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Home;
