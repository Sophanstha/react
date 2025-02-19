import { useEffect, useState } from 'react'
import { TodoProvider } from './Context'
import TodoForm from './Components/TodoFrom'
import TodoItem from './Components/TodoItem'

function App() {
 const [todos,settodos] = useState([])
 
//  add
 const addTodo = (todo)=>{
  settodos((prev) => [{id:Date.now(), ...todo },...prev] )
 }
//  update 
//  const updateTodo = (id,todo) =>{
//   settodos((prev) => prev.map((prev_val)=>{
//     if(prev_val.id === id){
//       todo;
//     }
//     else{
//       prev_val;
//     }
//   } ) )
//  }

const updateTodo = (id,todo)=>{ settodos((prev)=> prev.map((prev_val)=>(prev_val.id === id ? todo : prev_val) ) ) }
//  delete 

const deleteTodo = (id) => {
 settodos((prev) => prev.filter((prev_val) => prev_val.id !== id) )
}

// toggleComplete 

const toggoleComplete = (id)=>{
  settodos((prev)=> prev.map((prev_val)=> prev_val.id === id ? {...prev_val,completed: !prev_val.completed} : prev_val))
}

// storing in localStorage :
useEffect(()=>{
  const todos = JSON.parse(localStorage.getItem("todos"))

  if(todos && todos.length > 0){
    settodos(todos);
  }
},[])

useEffect(()=>{
localStorage.setItem("todos",JSON.stringify(todos));
},[todos])

  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggoleComplete}}>
<div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
