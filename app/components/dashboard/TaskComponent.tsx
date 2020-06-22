import React, { useState, useEffect, useCallback } from 'react';
import moment from "moment";
import { Task } from "../../interfaces/Task"
import PlayButton from './PlayButton';
import { calculateDuration } from '../../utils/task';
import styled from "styled-components"

const RoundButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50% !important;
  font-size: 0.60em !important;
`

interface TaskProps {
    task: Task,
    setActiveTaskId: (id: number | null) => void,
    deleteTask: (id: number) => void,
    isActiveTask: boolean
}

const TaskComponent: React.FC<TaskProps> = (props: TaskProps) => {
  const { task } = props;
  const handlePlay = useCallback(() => props.setActiveTaskId(task.id), [props.setActiveTaskId, task])
  const handleClose = useCallback(() => props.setActiveTaskId(null), [props.setActiveTaskId])
  const deleteTask = useCallback(() => props.deleteTask(task.id), [props.deleteTask, task])

  return (
    <tr>
      <td>{props.task.name}</td>
      <td>{moment(props.task.startDate).format('DD MMM')}</td>
      <td>{moment(props.task.startDate).format('hh:mm a')}</td>
      <td>{calculateDuration(props.task.duration)}</td>
      <td>
        <div className="buttons are-small">
          <RoundButton className="button is-light is-primary">
            <PlayButton
              handlePlay={handlePlay}
              handlePause={handleClose}
              isPaused={!props.isActiveTask}
            />
          </RoundButton>
          <RoundButton onClick={deleteTask} className="button is-light is-danger">
            <i className="far fa-trash-alt"></i>
          </RoundButton>
        </div>
      </td>
      {/* <td>
        <Link to={`/stats/${props.task.id}`}>Stats</Link>
      </td> */}
    </tr>
  )
}

export default TaskComponent
