import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialstate = {
    todos:[ 
        {
            id: 1,
            text : "helloworld"
        }
    ]
}

export const todoslice = createSlice({
   name : "todo",
   initialstate ,
   reducers : {
    addTodo : (state , action)=>{
         const todo = {
            id : nanoid(),
            text : action.payload
         }
         state.todo.push(todo);
    },
    removetodo : (state,action) =>{
        state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },
    updatetodo : (state,action) => {
        const todo = state.todo.find((todo) => todo.id === action.payload.id);
    }
   } 
})

export const {addTodo , removetodo,updatetodo} = todoslice.actions

export default todoslice.reducer;