import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removetodo } from '../feature/todo/TodoSlice';

 export function Todolist(){
    const selectTodos = (state)=> state.todos 
    const todos = useSelector(selectTodos
    )
    const dispatch = useDispatch();


    return ( 
<>
<div>Todos</div>
{
todos.map( (todo)=>{
<li key={todo.id}>
    {todo.text}
    <button onClick={()=> dispatch(removetodo)}> delete</button>
</li>
} )
}

</>
    )
}
