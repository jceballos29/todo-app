import React, { useState } from "react";
import { RiFlagFill, RiMore2Line } from "react-icons/ri";
import { Task as TaskType } from "../../types";

export interface TaskInterface {
  content: TaskType;
}

interface TaskState {
  checked: boolean;
}

const Task: React.FC<TaskInterface> = ({ content }) => {
  const [isChecked, setIsChecked] = useState<TaskState["checked"]>(
    content.completed
  );

  return (
    <li className="group relative w-full px-5 py-4 bg-white rounded-2xl shadow flex items-center mb-1">
      <div className="flex items-center">
        <input
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          type="checkbox"
          className="appearance-none h-4 w-4 border-[3px] border-slate-600 rounded-sm bg-white checked:bg-slate-600 checked:border-slate-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer mr-4"
        />
        <span className={`${isChecked ? "line-through" : ""} select-none leading-none`}>
          {content.task}
        </span>
      </div>
      <div className="absolute right-5 flex items-center group-hover:opacity-0 duration-300 group-hover:invisinale">
        <span className="text-[10px] leading-none font-light bg-[#5B5956] bg-opacity-10 text-[#5B5956]/80 py-1.5 px-2 rounded-md mr-2">
          {content.scheduleAt.toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
          })}
        </span>
        <RiFlagFill className={`${content.priority === 1 ? 'text-red-400' : content.priority === 2 ? 'text-orange-400' : content.priority === 3 ? 'text-blue-400' : 'text-gray-400' }`} />
      </div>
      <button className="absolute right-5 py-1 rounded-md bg-[#5B5956] bg-opacity-10 text-[#5B5956] translate-x-6 opacity-0 invisible duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-hover:visible">
          <RiMore2Line />
      </button>
    </li>
  );
};

export default Task;
