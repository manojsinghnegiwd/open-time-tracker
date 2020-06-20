import React from "react";
import styled from "styled-components"
import AddTask from './AddTask';
import TaskList from './TaskList';

import { StoreManager } from "../../interfaces/StoreManager";
import useTaskManager from "../../hooks/useTaskManager";

const Container = styled.div`
  padding: 10px;
`

interface TaskManagerProps {
  storeManager: StoreManager
}

const TaskManager: React.FC<TaskManagerProps> = (props: TaskManagerProps) => {
  const { tasks, addTask, handleTaskUpdate } = useTaskManager(props.storeManager)

  return (
    <Container>
      <TaskList
        tasks={tasks}
        handleTaskUpdate={handleTaskUpdate}
      />
      <AddTask onAdd={addTask} />
    </Container>
  );
}

export default TaskManager