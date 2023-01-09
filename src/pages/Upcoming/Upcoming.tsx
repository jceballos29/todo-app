import React, { useEffect, useState } from "react";
import { Task } from "../../components";
import { tasks as data } from "../../data/tasks";
import { Task as TaskType } from "../../types";

export interface UpcomingInterface {}

interface UpcomingState {
  tasks: Array<TaskType>;
}

const Upcoming: React.FC<UpcomingInterface> = () => {
  const [tasks, setTasks] = useState<UpcomingState["tasks"]>([]);

  useEffect(() => {
    const date = new Date();
    setTasks(
      data.filter(
        (task) =>
          task.scheduleAt.setHours(0, 0, 0, 0) >
          date.setHours(0, 0, 0, 0) && !task.completed
      )
    );
  }, []);

  return (
    <div className="w-full h-full">
      <header className="w-full">
        <h2 className="text-2xl font-bold">Upcoming</h2>
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

export default Upcoming;
