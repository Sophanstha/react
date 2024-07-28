import {configureStore} from '@reduxjs/toolkit';
import TodoSlice from '../feature/todo/TodoSlice';

export const Store = configureStore({
    reducer: TodoSlice
})