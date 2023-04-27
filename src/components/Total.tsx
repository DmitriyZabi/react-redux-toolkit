import { useAppSelector } from '../hooks/redux'
import { useToDoSelectors } from '../store/toDo/selectors'

export const Total = () => {
  const store = useAppSelector((state) => state.toDo)
  const { total, totalActive, totalCompleted, totalDeleted } =
    useToDoSelectors()

  return (
    <div className="card col-4">
      <div className="card-header">Total</div>
      <div className="card-body d-flex flex-column">
        <p className="m-0">Total to do: {total(store)}</p>
        <p className="m-0">Total active to do: {totalActive(store)}</p>
        <p className="m-0">Total completed to do: {totalCompleted(store)}</p>
        <p className="m-0">Total deleted to do: {totalDeleted(store)}</p>
      </div>
    </div>
  )
}
