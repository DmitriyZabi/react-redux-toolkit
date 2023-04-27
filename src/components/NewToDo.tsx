import { useState } from 'react'
import { useActions } from '../hooks/actions'
export function NewToDo() {
  const { addToDo } = useActions()

  const [value, setValue] = useState('')
  const changeHandler = (e: any) => {
    setValue(e.target.value)
  }
  return (
    <div className="card col-4">
      <div className="card-header">New To Do</div>
      <div className="card-body d-flex flex-column gap-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={value}
          onChange={changeHandler}
        />
        <button
          type="button"
          className="btn btn-primary col-4"
          onClick={() =>
            addToDo({
              id: null,
              name: value ? value : 'NewToDo',
              status: null,
            })
          }
        >
          Add To Do
        </button>
      </div>
    </div>
  )
}
