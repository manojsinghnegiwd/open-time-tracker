import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components"
import AddTask from './AddTask';
import TaskList from './TaskList';

import { Task } from '../../interfaces/Task';
import { StoreManager } from "../../interfaces/StoreManager";
import { generateNewTask } from "../../utils/task";

const Container = styled.div`
  padding: 10px;
`

interface TaskManagerProps {
  storeManager: StoreManager
}

const TaskManager: React.FC<TaskManagerProps> = (props: TaskManagerProps) => {
  const { storeManager } = props;

  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = useCallback((task: string) => {
    const newTask = generateNewTask(task)
    const updatedTasks = tasks.concat(newTask)
    setTasks(updatedTasks)

    const store = async () => {
      await storeManager.store(updatedTasks)
    }

    store()
  }, [tasks, setTasks, storeManager])

  useEffect(() => {
    const load = async () => {
      const list = await storeManager.load()
      setTasks(list)
    }
    load()
  },[storeManager])

  return (
    <Container>
      <AddTask onAdd={addTask} />
      <TaskList
        tasks={tasks}
        handleTaskUpdate={() => {}}
      />
    </Container>
  );
}

export default TaskManager