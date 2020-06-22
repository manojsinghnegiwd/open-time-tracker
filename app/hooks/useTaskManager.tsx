import { useState, useCallback, useEffect } from 'react';
import { Task } from '../interfaces/Task';
import { StoreManager } from '../interfaces/StoreManager';
import { generateNewTask } from '../utils/task';

const useTaskManager = (storeManager: StoreManager) => {
  const [tasks, setTasks] = useState<Task[]>([])

  const storeTasks = useCallback((updatedTasks: Task[]) => {
    const store = async () => {
      await storeManager.store(updatedTasks)
    }
    store()
  }, [storeManager])

  const addTask = useCallback((task: string) => {
    const newTask = generateNewTask(task)
    const updatedTasks = tasks.concat(newTask)
    setTasks(updatedTasks)
    storeTasks(updatedTasks)
  }, [tasks, setTasks, storeManager])

  const handleTaskUpdate = useCallback((updatedTask: Task) => {
    const index = tasks.findIndex(task => task.id === updatedTask.id)

    if (index > -1) {
      const tasksCopy = [...tasks]
      tasksCopy[index] = updatedTask
      setTasks(tasksCopy)
      storeTasks(tasksCopy)
    }
  }, [tasks, setTasks, storeManager])

  const deleteTask = useCallback((id: number, callback?: () => void) => {
    const filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
    storeTasks(filteredTasks)
    if (callback) callback()
  }, [tasks])

  useEffect(() => {
    const load = async () => {
      const list = await storeManager.load()
      setTasks(list)
    }
    load()
  },[storeManager])

  return {
    tasks,
    addTask,
    handleTaskUpdate,
    deleteTask
  }
}

export default useTaskManager;
