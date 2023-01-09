import React, { useEffect, useState } from "react";
import { Task } from "../../components";
import { tasks as data } from "../../data/tasks";
import { Task as TaskType } from "../../types";

export interface CompletedInterface {}

interface CompletedState {
  tasks: Array<TaskType>;
}

const Completed: React.FC<CompletedInterface> = () => {
  const [tasks, setTasks] = useState<CompletedState["tasks"]>([]);

  useEffect(() => {
    setTasks(data.filter((task) => task.completed));
  }, []);

  return (
    <div className="w-full h-full">
      <header className="w-full">
        <h2 className="text-2xl font-bold">Completed</h2>
      </header>
      <div className="w-full mt-8">
        <ul>
          {tasks.map((task) => (
            <Task key={task.id} content={task} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Completed;
