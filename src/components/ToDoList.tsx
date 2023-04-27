import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import { IToDo } from '../store/toDo/model'
import { useToDoSelectors } from '../store/toDo/selectors'

export const ToDoList = () => {
  const store = useAppSelector((state) => state.toDo)
  const { completeToDo, deleteToDo, toActiveToDo } = useActions()
  const { activeList, completedList, deletedList } = useToDoSelectors()

  return (
    <div className="d-flex gap-4 mt-4">
      <div className="d-flex flex-column gap-2 col-4">
        <h3>Active</h3>
        {activeList(store).map((toDo: IToDo) => (
          <div className="card" key={toDo.id}>
            <div className="card-body d-flex justify-content-between align-items-center gap-2">
              <h5 className="card-title mb-0">{toDo.name}</h5>
              <div className="d-flex gap-1">
                <button
                  className="btn btn-success"
                  onClick={() => completeToDo(toDo.id)}
                >
                  Completed
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteToDo(toDo.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex flex-column gap-2 col-4">
        <h3>Completed</h3>
        {completedList(store).map((toDo: IToDo) => (
          <div className="card" key={toDo.id}>
            <div className="card-body d-flex justify-content-between align-items-center gap-2">
              <h5 className="card-title mb-0">{toDo.name}</h5>
              <div className="d-flex gap-1">
                <button
                  className="btn btn-primary"
                  onClick={() => toActiveToDo(toDo.id)}
                >
                  To Active
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteToDo(toDo.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex flex-column gap-2 col-4">
        <h3>Deleted</h3>
        {deletedList(store).map((toDo: IToDo) => (
          <div className="card" key={toDo.id}>
            <div className="card-body d-flex justify-content-between align-items-center gap-2">
              <h5 className="card-title mb-0">{toDo.name}</h5>
              <div className="d-flex gap-1">
                <button
                  className="btn btn-primary"
                  onClick={() => toActiveToDo(toDo.id)}
                >
                  To Active
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => completeToDo(toDo.id)}
                >
                  Completed
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
