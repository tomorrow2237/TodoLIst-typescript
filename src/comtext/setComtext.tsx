import React, { createContext, useContext, useState, ReactNode } from "react";

interface Task {
  id: number;
  task: string;
}

interface TaskContextProps {
  children: ReactNode;
}

type TaskContextType = [Task[], React.Dispatch<React.SetStateAction<Task[]>>];

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<TaskContextProps> = ({ children }) => {
  const Todos: Task[] = [
    { id: 1, task: "Shopping" },
    { id: 2, task: "Running" },
  ];
  const [tasks, setTasks] = useState<Task[]>(Todos);

  return (
    <TaskContext.Provider value={[tasks, setTasks]}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTodos = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTodos must be used within a TaskProvider");
  }
  return context;
};