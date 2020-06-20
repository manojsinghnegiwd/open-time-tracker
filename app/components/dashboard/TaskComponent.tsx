import React from 'react';
import { Task } from "../../interfaces/Task"

interface TaskProps {
    task: Task,
    handleTaskUpdate: (task: Task) => void
}

const TaskComponent: React.FC<TaskProps> = (props: TaskProps) => {
  return (
    <div className="columns">
      <div className="column">
        {props.task.name}
      </div>
    </div>
  )
}

export default TaskComponent
