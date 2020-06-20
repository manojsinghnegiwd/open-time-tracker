import React, {useState, useCallback} from "react";
import styled, { StyledComponent } from "styled-components"
import NewTaskForm from "./NewTaskForm";

const AddButton: StyledComponent<"button", {}> = styled.button`
  width: 100%;
`
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
      <AddButton
        className="button is-success"
        onClick={toggleNewTask}
      >
        Add a new task
      </AddButton>
    </div>
  );
}

export default AddTask;