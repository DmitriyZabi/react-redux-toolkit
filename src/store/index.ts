import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { toDoReducer } from './toDo/slice'

export const store = configureStore({
  reducer: {
    toDo: toDoReducer,
  },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
