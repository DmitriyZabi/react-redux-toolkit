import { ListMethods } from './components/ListMethods'
import { NewToDo } from './components/NewToDo'
import { ToDoList } from './components/ToDoList'
import { Total } from './components/Total'

function App() {
  return (
    <div className="container mt-3">
      <div className="d-flex gap-3">
        <NewToDo />
        <Total />
        <ListMethods />
      </div>
      <ToDoList />
    </div>
  )
}

export default App
