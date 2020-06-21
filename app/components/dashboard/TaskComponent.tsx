import React, { useState, useEffect, useCallback } from 'react';
import moment from "moment";
import { Task } from "../../interfaces/Task"
import PlayButton from './PlayButton';
import { calculateDuration } from '../../utils/task';
import { Link } from 'react-router-dom';

interface TaskProps {
    task: Task,
    setActiveTaskId: (id: number | null) => void,
    isActiveTask: boolean
}

const TaskComponent: React.FC<TaskProps> = (props: TaskProps) => {
  const { task } = props;
  const handlePlay = useCallback(() => props.setActiveTaskId(task.id), [props.setActiveTaskId, task])
  const handleClose = useCallback(() => props.setActiveTaskId(null), [props.setActiveTaskId])

  return (
    <tr>
      <td>{props.task.name}</td>
      <td>{moment(props.task.startDate).format('DD MMM')}</td>
      <td>{moment(props.task.startDate).format('hh:mm a')}</td>
      <td>{calculateDuration(props.task.duration)}</td>
      <td>
        <PlayButton
          handlePlay={handlePlay}
          handlePause={handleClose}
          isPaused={!props.isActiveTask}
        />
      </td>
      <td>
        <Link to={`/stats/${props.task.id}`}>Stats</Link>
      </td>
    </tr>
  )
}

export default TaskComponent
