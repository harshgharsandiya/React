import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    // todos: [{id: 1, text: "Demo "}]
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                // text: action.payload.text
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            // const id = action.payload.id;
            const id = action.payload;
            state.todos = state.todos.filter((todo) => todo.id !== id);
            
        },
        updateTodo: (state, action) => {
            const {id , text} = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer;

