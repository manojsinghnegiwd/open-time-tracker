import React, {useState, useCallback} from "react";
import NewTaskForm from "./NewTaskForm";
import styled from "styled-components";

const AddButtonContainer = styled.div`
  text-align: center;
`

const AddButton = styled.button`
  border-radius: 50%;
  width: 50px;
  height: 50px;
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
    <AddButtonContainer className="field">
      <AddButton
        className="button is-primary is-light"
        onClick={toggleNewTask}
      >
        <i className="fas fa-plus"></i>
      </AddButton>
    </AddButtonContainer>
  );
}

export default AddTask;