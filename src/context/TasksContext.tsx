import React, { createContext, FC, ReactNode, useState } from "react";
import { Context, Task } from "../types/Interfaces";
import useLocalStorage from "use-local-storage";

interface Props {
  children?: ReactNode;
}

export const TasksContext = createContext<Context>({
  setTasks: () => null,
  tasks: [],
  filterStatus: "All",
  setFilterStatus: () => null,
});

export const TasksProvider: FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage<Array<Task>>("tasks", []);
  const [filterStatus, setFilterStatus] = useLocalStorage<string>(
    "filterStatus",
    "All"
  );

  return (
    <TasksContext.Provider
      value={{ tasks, setTasks, setFilterStatus, filterStatus }}
    >
      {children}
    </TasksContext.Provider>
  );
};
