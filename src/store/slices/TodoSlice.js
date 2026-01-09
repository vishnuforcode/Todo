import {createSlice, nanoid} from '@reduxjs/toolkit'


const initialState  = {
  todos : JSON.parse(localStorage.getItem('todo')) || []
} 
const todoSlice = createSlice({
    name: 'todo',
    initialState ,

    reducers:{
        addTodo :(state , action)=>{
            const todo = {
                id : nanoid() ,
                text : action.payload
            }
            state.todos.push(todo)
            localStorage.setItem("todo" , JSON.stringify(state.todos))
            
        } ,

        removeTodo :(state ,action)=> {
            const id  = action.payload
            state.todos = state.todos.filter((todo)=> todo.id !== id)

            localStorage.setItem('todo', JSON.stringify(state.todos))
        } ,

        updateTodo :(state ,action)=>{
            const id = action.payload.id
            const textRecieved = action.payload.text

            const todoToUpdate = state.todos.find((todo) => todo.id === id)

            if(todoToUpdate){
                
                todoToUpdate.text = textRecieved
                localStorage.setItem('todo' , JSON.stringify(state.todos))
            }
            
             
            
        }
    }
})

export const {addTodo , removeTodo , updateTodo} = todoSlice.actions

export default todoSlice.reducer