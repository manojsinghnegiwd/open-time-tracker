import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components"
import AddTask from './AddTask';
import TaskList from './TaskList';

import { StoreManager } from "../../interfaces/StoreManager";
import useTaskManager from "../../hooks/useTaskManager";
import { Task } from "../../interfaces/Task";
import useTimer from "../../hooks/useTimer";

const Container = styled.div`
  padding: 10px;
`

interface TaskManagerProps {
  storeManager: StoreManager
}

const TaskManager: React.FC<TaskManagerProps> = (props: TaskManagerProps) => {
  const { tasks, addTask, handleTaskUpdate, deleteTask } = useTaskManager(props.storeManager)
  const [ activeTaskId, setActiveTaskId ] = useState<number | null>(null)

  const { duration, start, stop } = useTimer(1000);

  const handleDeleteTask = (id: number) => {
    const taskToBeDeleted: Task = tasks.find(task => task.id === id) || {} as Task
    deleteTask(id, () => new Notification('Deleted', {
      body: `${taskToBeDeleted.name}`
    }))
  }

  const changeTask = useCallback((id: number | null) => {
    setActiveTaskId(id)

    const activeTask: Task = tasks.find(task => task.id === id) || {} as Task

    if (id) {
      start(activeTask.duration || 0)
      new Notification('Started', {
        body: `Tracking started for ${activeTask.name}`
      })
    } else {
      stop()

      const previousTask: Task = tasks.find(task => task.id === activeTaskId) || {} as Task

      new Notification('Stopped', {
        body: `Tracking stopped for ${previousTask.name}`
      })
    }
  }, [setActiveTaskId, start, stop, tasks, activeTaskId])

  useEffect(() => {
    const activeTask: Task = tasks.find(task => task.id === activeTaskId) || {} as Task
    if (duration !== activeTask.duration) {
      handleTaskUpdate({...activeTask, duration})
    }
  }, [duration, handleTaskUpdate, activeTaskId])


  return (
    <Container>
      <TaskList
        tasks={tasks}
        activeTaskId={activeTaskId}
        setActiveTaskId={changeTask}
        deleteTask={handleDeleteTask}
      />
      <AddTask onAdd={addTask} />
    </Container>
  );
}

export default TaskManager