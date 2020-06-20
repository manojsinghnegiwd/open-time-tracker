import React from 'react';
import styled from "styled-components";
import { Task } from '../../interfaces/Task';
import TaskComponent from "./TaskComponent";

const StyledTable = styled.table`
  width: 100%;
`

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
    <StyledTable className="table">
      <thead>
        <th>Task</th>
        <th>Start</th>
        <th>End</th>
        <th>Duration</th>
        <th></th>
      </thead>
      <tbody>
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
      </tbody>
    </StyledTable>
  );
}

TaskList.defaultProps = {
  tasks: []
}

export default TaskList;
