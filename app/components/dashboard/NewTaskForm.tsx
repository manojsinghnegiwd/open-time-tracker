import React, { useState, useCallback } from "react";

interface NewTaskFormProps {
  onSave: (task: string) => void,
  onCancel: () => void
}

const NewTaskForm: React.FC<NewTaskFormProps> = (props: NewTaskFormProps) => {
  const [task, setTask] = useState<string>('');
  const handleTaskChange = useCallback(e => setTask(e.target.value) , [setTask])
  const onSave = useCallback(() => props.onSave(task), [task, props.onSave])

  return (
    <div className="field">
      <div className="field">
        <div className="control">
          <input value={task} onChange={handleTaskChange} className="input" type="text" placeholder="Task" />
        </div>
      </div>
      <div className="field is-grouped">
        <p className="control">
          <button className="button is-success" onClick={onSave}>
            Save
          </button>
        </p>
        <p className="control">
          <button className="button is-danger"  onClick={props.onCancel}>
            Cancel
          </button>
        </p>
      </div>
    </div>
  );
}

export default NewTaskForm;