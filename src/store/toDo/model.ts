export enum ToDoStatus {
  Completed = 'completed',
  Active = 'active',
  Deleted = 'deleted',
}

export interface IToDo {
  id: string | null
  name: string
  status: ToDoStatus | null
}

export interface IToDoState {
  toDoList: IToDo[]
}

export interface IToDoSelectors {
  allList(state: IToDoState): IToDo[]
  activeList(state: IToDoState): IToDo[]
  completedList(state: IToDoState): IToDo[]
  deletedList(state: IToDoState): IToDo[]
  total(state: IToDoState): number
  totalActive(state: IToDoState): number
  totalCompleted(state: IToDoState): number
  totalDeleted(state: IToDoState): number
}
