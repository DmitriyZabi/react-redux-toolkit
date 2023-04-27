import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import { IToDo, IToDoState, ToDoStatus } from './model'

const initialState: IToDoState = {
  toDoList: [],
}

const toDoSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
    addToDo(state, action: PayloadAction<IToDo>) {
      action.payload.id = uuidv4()
      action.payload.status = ToDoStatus.Active
      state.toDoList.push(action.payload)
    },
    toActiveToDo(state, action: PayloadAction<string | null>) {
      const findToDo = state.toDoList.find((x) => x.id === action.payload)
      if (findToDo) {
        findToDo.status = ToDoStatus.Active
      }
    },
    completeToDo(state, action: PayloadAction<string | null>) {
      const findToDo = state.toDoList.find((x) => x.id === action.payload)
      if (findToDo) {
        findToDo.status = ToDoStatus.Completed
      }
    },
    deleteToDo(state, action: PayloadAction<string | null>) {
      const findToDo = state.toDoList.find((x) => x.id === action.payload)
      if (findToDo) {
        findToDo.status = ToDoStatus.Deleted
      }
    },
    clearToDoList(state) {
      state.toDoList = []
    },
    toActiveAll(state) {
      state.toDoList.forEach((x) => (x.status = ToDoStatus.Active))
    },
    completeAll(state) {
      state.toDoList.forEach((x) => (x.status = ToDoStatus.Completed))
    },
    deleteAll(state) {
      state.toDoList.forEach((x) => (x.status = ToDoStatus.Deleted))
    },
  },
})

export const toDoActions = toDoSlice.actions
export const toDoReducer = toDoSlice.reducer
