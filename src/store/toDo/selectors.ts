import { IToDoState, IToDoSelectors, ToDoStatus } from './model'

export function useToDoSelectors(): IToDoSelectors {
  const allList = (state: IToDoState) => state.toDoList
  const activeList = (state: IToDoState) =>
    allList(state).filter((x) => x.status === ToDoStatus.Active)
  const completedList = (state: IToDoState) =>
    allList(state).filter((x) => x.status === ToDoStatus.Completed)
  const deletedList = (state: IToDoState) =>
    allList(state).filter((x) => x.status === ToDoStatus.Deleted)
  const total = (state: IToDoState) => allList(state).length
  const totalActive = (state: IToDoState) => activeList(state).length
  const totalCompleted = (state: IToDoState) => completedList(state).length
  const totalDeleted = (state: IToDoState) => deletedList(state).length
  return {
    allList,
    activeList,
    completedList,
    deletedList,
    total,
    totalActive,
    totalCompleted,
    totalDeleted,
  }
}
