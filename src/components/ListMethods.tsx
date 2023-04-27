import { useActions } from '../hooks/actions'

export const ListMethods = () => {
  const { clearToDoList, toActiveAll, completeAll, deleteAll } = useActions()
  return (
    <div className="card col-4">
      <div className="card-header">List Methods</div>
      <div className="card-body">
        <button
          className="btn btn-danger mt-2 mx-2"
          onClick={() => clearToDoList()}
        >
          Clear List
        </button>
        <button
          className="btn btn-primary mt-2 mx-2"
          onClick={() => toActiveAll()}
        >
          To Active All
        </button>
        <button
          className="btn btn-success mt-2 mx-2"
          onClick={() => completeAll()}
        >
          Complete All
        </button>
        <button
          className="btn btn-danger mt-2 mx-2"
          onClick={() => deleteAll()}
        >
          Delete All
        </button>
      </div>
    </div>
  )
}
