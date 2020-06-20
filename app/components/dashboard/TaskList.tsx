import React from 'react';
import { Task } from '../../interfaces/Task';
import TaskComponent from "./TaskComponent";

interface TaskListProps {
  tasks: Task[],
  handleTaskUpdate: (task: Task) => void
}

const TaskList: React.FC<TaskListProps> = (props: TaskListProps) => {

  if (!props.tasks.length) {
    return (
      <article className="message is-primary">
        <div className="message-body">
            No tasks.
        </div>
      </article>
    )
  }

  return (
    <div>
      {
        props.tasks.map(
          (task, index) => (
            <TaskComponent
                key={index}
                task={task}
                handleTaskUpdate={props.handleTaskUpdate}
            />
          )
        )
      }
    </div>
  );
}

TaskList.defaultProps = {
  tasks: []
}

export default TaskList;
