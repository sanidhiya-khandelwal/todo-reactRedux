import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todos'

function App() {

  return (
    <>
      <h1 className='text-white text-center mt-5 text-3xl'>Todo with redux toolkit</h1>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App
