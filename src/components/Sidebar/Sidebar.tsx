/** @format */

import React from "react";
import {
  RiCalendar2Line,
  RiCheckboxCircleLine,
  RiFileList2Line,
  RiHome2Line,
} from "react-icons/ri";
import { NavTab } from "../../types";
import { Tab } from "../Tab";
import { tasks } from "../../data/tasks";

export interface SidebarInterface {}

const Sidebar: React.FC<SidebarInterface> = () => {
  const date = new Date();

  const navigation: Array<NavTab> = [
    {
      name: "Home",
      icon: RiHome2Line,
      path: "/home",
      tag: true,
      amount: tasks.filter(
        (task) =>
          !task.completed &&
          task.scheduleAt.setHours(0, 0, 0, 0) >= date.setHours(0, 0, 0, 0)
      ).length,
    },
    {
      name: "Today",
      icon: RiFileList2Line,
      path: "/today",
      tag: true,
      amount: tasks.filter(
        (task) =>
          !task.completed &&
          task.scheduleAt.setHours(0, 0, 0, 0) == date.setHours(0, 0, 0, 0)
      ).length,
    },
    {
      name: "Upcoming",
      icon: RiCalendar2Line,
      path: "/upcoming",
      tag: true,
      amount: tasks.filter(
        (task) =>
          task.scheduleAt.setHours(0, 0, 0, 0) > date.setHours(0, 0, 0, 0) &&
          !task.completed
      ).length,
    },
    {
      name: "Completed",
      icon: RiCheckboxCircleLine,
      path: "/completed",
      tag: true,
      amount: tasks.filter((task) => task.completed).length,
    },
  ];

  return (
    <aside className="h-full w-full max-w-xs bg-white rounded-xl py-10 px-8 shadow flex flex-col">
      <ul>
        {navigation.map((item, index) => (
          <Tab key={index} tab={item} />
        ))}
      </ul>

      <div className="w-full mt-auto text-center text-xs text-slate-500 select-none">
        Juan Ceballos - FI Group
      </div>
    </aside>
  );
};

export default Sidebar;
