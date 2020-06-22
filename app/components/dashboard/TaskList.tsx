import React, { SetStateAction, Dispatch, useMemo } from 'react';
import styled from "styled-components";
import { Task } from '../../interfaces/Task';
import TaskComponent from "./TaskComponent";
import moment from "moment";

const StyledTable = styled.table`
  width: 100%;
`

interface TaskListProps {
  tasks: Task[],
  activeTaskId: number | null,
  setActiveTaskId: (id: number | null) => void,
  deleteTask: (id: number) => void
}

const TaskList: React.FC<TaskListProps> = (props: TaskListProps) => {

  const sortedTasks = useMemo(() => props.tasks.sort(
    (taskA, taskB) => moment(taskB.startDate).diff(moment(taskA.startDate))
  ), [props.tasks])

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
        <tr>
          <th>Task</th>
          <th>Date</th>
          <th>Start</th>
          <th>Duration</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          sortedTasks.map(
            (task, index) => (
              <TaskComponent
                key={index}
                task={task}
                setActiveTaskId={props.setActiveTaskId}
                isActiveTask={task.id === props.activeTaskId}
                deleteTask={props.deleteTask}
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
