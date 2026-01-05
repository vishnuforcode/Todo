import {configureStore} from '@reduxjs/toolkit'
import todoReducers from './slices/TodoSlice'

export const store = configureStore({
    reducer:{
       todo:  todoReducers
    }
})

export default store 
