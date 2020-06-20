import React, {useState, useCallback} from "react";
import NewTaskForm from "./NewTaskForm";

interface AddTaskProps {
  onAdd: (task: string) => void
}

const AddTask: React.FC<AddTaskProps> = (props: AddTaskProps) => {
  const [ showNewTaskForm, toggleNewTaskForm ] = useState<boolean>(false)

  const toggleNewTask = useCallback(
    () => toggleNewTaskForm(!showNewTaskForm),
    [showNewTaskForm, toggleNewTaskForm]
  )

  const onAdd = useCallback((task: string) => {
    props.onAdd(task)
    toggleNewTask()
  }, [props.onAdd, toggleNewTask])

  if (showNewTaskForm) {
    return (
      <NewTaskForm
        onSave={onAdd}
        onCancel={() => toggleNewTask()}
      />
    );
  }

  return (
    <div className="field">
      <button
        className="button is-success"
        onClick={toggleNewTask}
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTask;