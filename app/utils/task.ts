import { Task } from "../interfaces/Task"

export const generateNewTask = (task: string) => {
  const newTask: Task = {
    id: new Date().getTime(),
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    name: task,
    duration: 0
  }

  return newTask
}