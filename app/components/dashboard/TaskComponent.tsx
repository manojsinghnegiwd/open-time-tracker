import React, { useState, useEffect, useCallback } from 'react';
import moment from "moment";
import { Task } from "../../interfaces/Task"
import PlayButton from './PlayButton';
import { calculateDuration } from '../../utils/task';

interface TaskProps {
    task: Task,
    handleTaskUpdate: (task: Task) => void
}

const TaskComponent: React.FC<TaskProps> = (props: TaskProps) => {
  const { task, handleTaskUpdate } = props;

  const [duration, setDuration] = useState<number>(0)
  const [intervalId, setIntervalId] = useState<number | null>(null)
  const [saveIntervalId, setSaveIntervalId] = useState<number | null>(null)

  const handlePlay = useCallback(() => {
    if (intervalId) {
      clearInterval(intervalId)
    }

    if (saveIntervalId) {
      clearTimeout(saveIntervalId)
    }
    // creating a copy of duration so it can be used inside setInterval
    let newDuration = duration

    const newIntervalId = setInterval(() => {
      newDuration = newDuration + 1
      setDuration(newDuration)
    }, 1000)

    const newSaveIntervalId = setInterval(() => {
      handleTaskUpdate({
        ...task,
        duration: newDuration
      })
    }, 1000 * 10);

    setIntervalId(newIntervalId)
    setSaveIntervalId(newSaveIntervalId)
  }, [intervalId, saveIntervalId, duration, task, setDuration, setIntervalId, handleTaskUpdate])

  const handleClose = useCallback(() => {
    if (intervalId) {
      clearInterval(intervalId)
      setIntervalId(null)
    }

    if (saveIntervalId) {
      clearInterval(saveIntervalId)
      setIntervalId(null)
    }

    handleTaskUpdate({
      ...task,
      duration
    })
  }, [intervalId, saveIntervalId, duration, task, handleTaskUpdate])

  useEffect(() => {
    if (task.duration !== duration) {
      setDuration(task.duration)
    }
  }, [task.duration])

  return (
    <tr>
      <td>{props.task.name}</td>
      <td>{moment(props.task.startDate).format('DD MMM')}</td>
      <td>{moment(props.task.startDate).format('hh:mm a')}</td>
      <td>{calculateDuration(duration || props.task.duration)}</td>
      <td>
        <PlayButton
          handlePlay={handlePlay}
          handlePause={handleClose}
        />
      </td>
    </tr>
  )
}

export default TaskComponent
