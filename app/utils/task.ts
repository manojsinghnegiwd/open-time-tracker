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

export const calculateDuration = (seconds: number) => {
  let remainingSeconds = 0
  const calculatedHours = Math.floor(seconds / 60 / 60)
  remainingSeconds = seconds - (calculatedHours * 60 * 60)
  const calculatedMinutes = Math.floor(remainingSeconds / 60)
  remainingSeconds = seconds - (calculatedMinutes * 60 )
  const calculatedSeconds = remainingSeconds

  return `${calculatedHours < 10 ? `0${calculatedHours}` : calculatedHours}:${calculatedMinutes < 10 ? `0${calculatedMinutes}` : calculatedMinutes}:${calculatedSeconds < 10 ? `0${calculatedSeconds}` : calculatedSeconds}`
}
