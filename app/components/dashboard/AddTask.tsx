import React, {useState, useCallback} from "react";
import styled, { StyledComponent } from "styled-components"
import NewTaskForm from "./NewTaskForm";

const AddButton: StyledComponent<"button", {}> = styled.button`
  width: 100%;
`
const AddTask: React.FC = () => {
  const [ showNewTaskForm, toggleNewTaskForm ] = useState<boolean>(false)

  const toggleNewTask = useCallback(
    () => toggleNewTaskForm(!showNewTaskForm),
    [showNewTaskForm, toggleNewTaskForm]
  )

  if (showNewTaskForm) {
    return (
      <NewTaskForm
        onSave={() => toggleNewTask()}
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