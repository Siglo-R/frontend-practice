import { useState } from 'react'
import './styles.css'
import { NewTodoForm } from './newTodoForm'

export default function App() {
  const [counter,setCounter]= useState(0)
  const increment = () => setCounter(counter + 1)
  const decrement = () => setCounter(counter - 1)
  const [todos, setTodos]=useState([])
  
  function addTodo(title){
    setTodos((currentTodos)=> { 
      return [
        ...currentTodos,
      {id:crypto.randomUUID(), title , completed: false},
    ]
  })
}
    
 function toggleTodo(id, completed){
  setTodos(currentTodos=>{
    return currentTodos.map(todo=>{
      if (todo.id=== id){
        return{...todo,completed}
      }

      return todo
    })
  }
    )
 }
  function deleteToDo(id){
    setTodos(currentTodos=>{
      return currentTodos.filter(todo=>todo.id!==id)
    })
  }
  return(
  <>
    <NewTodoForm onSubmit={addTodo}/>
    <h1 className='header'> Todo List</h1>
  <ul className='list'>
    {todos.map(todo=> {
      return(
      <li key={todo.id}>
        <label>
          <input type='checkbox' 
          checked={todo.completed}
          onChange={e=> toggleTodo(todo.id, e.target.checked)}
          />
          {todo.title}
        </label>
        <button onClick={()=> deleteToDo(todo.id)} className="btn btn-danger">Delete</button>
      </li>) 
    })
    }
    
  </ul>
  <h1 onClick={increment}>Button Counter </h1>
  <u1>{counter}</u1>
  </>
    
  
  )
}

